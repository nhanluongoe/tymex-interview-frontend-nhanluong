import Fallback from '@components/Fallback.tsx'
import LoadingFallback from '@components/LoadingFallback'
import RootLayout from '@components/layout/RootLayout'
import homeRoutes from '@modules/home/routes'
import marketplaceRoutes from '@modules/marketplace/routes'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { createBrowserRouter, Outlet } from 'react-router-dom'

const NotFound = lazy(() => import('@components/NotFound'))

const router = createBrowserRouter([
    {
        element: (
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        fallbackRender={({ resetErrorBoundary }) => (
                            <Fallback onAction={resetErrorBoundary} />
                        )}
                    >
                        <Suspense fallback={<LoadingFallback />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        ),
        children: [
            {
                path: '/',
                element: <RootLayout />,
                children: [...homeRoutes, ...marketplaceRoutes],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
])

export default router
