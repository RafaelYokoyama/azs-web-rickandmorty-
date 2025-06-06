import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import { ROUTES } from '.'
import Home from '@/presentation/pages/Home/Index'
import Episodes from '../../pages/Episodes'
import { LoadingScreen } from '@/presentation/components/LoadingScreen'
import NotFound from '@/presentation/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Home />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    path: ROUTES.EPISODES,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Episodes />
      </Suspense>
    ),
    errorElement: <NotFound />
  }
])
