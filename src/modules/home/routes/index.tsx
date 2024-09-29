import { RouteObject } from 'react-router-dom'
import HomePage from '../pages'

const homeRoutes: RouteObject[] = [
    {
        path: '',
        element: <HomePage />,
    },
]

export default homeRoutes
