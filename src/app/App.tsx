import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react";

// layouts
import AppLayout from '@/layouts/AppLayout'
import AuthLayout from '@/layouts/AuthLayout';

// pages & components
import Loading from '@/components/Loading';
import Home from '@/pages/Home';

const NotFound = lazy(() => import('@/pages/NotFound'))

// main
const Quizzes = lazy(() => import('@/pages/Quizzes'))
const Rooms = lazy(() => import('@/pages/Rooms'))
const Leaderboard = lazy(() => import('@/pages/Leaderboard'))
const CreateQuiz = lazy(() => import('@/pages/CreateQuiz'))

// legal
const Legal = lazy(() => import('@/pages/legal/Legal'))
const PrivacyPolicy = lazy(() => import('@/pages/legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('@/pages/legal/TermsOfService'))

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
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />

            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />

            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<RequestReset />} />
            <Route path="/forgot-password/verify" element={<VerifyCode />} />
            <Route path="/forgot-password/reset" element={<ResetPassword />} />
          </Route>


        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
