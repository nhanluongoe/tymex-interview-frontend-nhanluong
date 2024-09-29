import { RouteObject } from 'react-router-dom'
import MarketPlacePage from '../pages'
import { TokenProvider } from '../contexts/TokenContext'

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
