import NotFound from '@components/NotFound'
import RootLayout from '@components/layout/RootLayout'
import homeRoutes from '@modules/home/routes'
import marketplaceRoutes from '@modules/marketplace/routes'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [...homeRoutes, ...marketplaceRoutes],
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router
