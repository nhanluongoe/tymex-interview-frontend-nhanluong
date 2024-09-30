import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('../pages'))

const homeRoutes: RouteObject[] = [
    {
        path: '',
        element: <HomePage />,
    },
]

export default homeRoutes
