import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react";

// layouts
import AppLayout from '@/layouts/AppLayout'

// pages & components
import Loading from '@/components/Loading';
import Home from '@/pages/Home';

const NotFound = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route element={<AppLayout />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App