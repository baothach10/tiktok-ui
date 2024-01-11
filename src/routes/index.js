import routesConfig from '~/config/routes'

// Layouts
import { HeaderOnly } from '~/components/Layout'

// Routes
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import SearchPage from '~/pages/Search'


const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: SearchPage, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }