import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react";

// layouts
import AppLayout from '@/layouts/AppLayout'
import AuthLayout from '@/layouts/AuthLayout';

// pages & components
import Loading from '@/components/Loading';
import Home from '@/pages/Home';

const NotFound = lazy(() => import('@/pages/NotFound'))
// auth
const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))
const RequestReset = lazy(() => import('@/pages/auth/PasswordRecovery/steps/RequestReset'))
const VerifyCode = lazy(() => import('@/pages/auth/PasswordRecovery/steps/VerifyCode'))
const ResetPassword = lazy(() => import('@/pages/auth/PasswordRecovery/steps/ResetPassword'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route element={<AppLayout />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<RequestReset />} />
            <Route path="/forgot-password/verify" element={<VerifyCode />} />
            <Route path="/forgot-password/reset" element={<ResetPassword />} />
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
