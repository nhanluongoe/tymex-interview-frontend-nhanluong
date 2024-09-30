import { RouteObject } from 'react-router-dom'
import { TokenProvider } from '../contexts/TokenContext'
import { lazy } from 'react'

const MarketPlacePage = lazy(() => import('../pages'))

const routes: RouteObject[] = [
    {
        path: 'marketplace',
        element: (
            <TokenProvider>
                <MarketPlacePage />
            </TokenProvider>
        ),
    },
]

export default routes
