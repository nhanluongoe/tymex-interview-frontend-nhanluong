import Fallback from '@components/Fallback.tsx'
import NotFound from '@components/NotFound'
import RootLayout from '@components/layout/RootLayout'
import homeRoutes from '@modules/home/routes'
import marketplaceRoutes from '@modules/marketplace/routes'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { createBrowserRouter, Outlet } from 'react-router-dom'

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
                        <Outlet />
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
