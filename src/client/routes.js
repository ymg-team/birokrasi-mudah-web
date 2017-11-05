import Home from './containers/Home'
import RootLayout from './layouts/Default'

export default [
    {
        component: RootLayout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            }
        ]
    }
]