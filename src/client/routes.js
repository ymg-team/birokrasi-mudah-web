import Home from './containers/Home'
import Hasil from './containers/Hasil'
import NotFound from './containers/NotFound'
import RootLayout from './layouts/Default'

export default [
    {
        component: RootLayout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/hasil/:title',
                exact: true,
                component: Hasil
            },
            {
                path: '*',
                exact: true,
                component: NotFound
            }
        ]
    }
]