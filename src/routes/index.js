import config from '~/config'

// Layouts
import { HeaderOnly } from '~/layouts'

// Routes
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import SearchPage from '~/pages/Search'


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: SearchPage, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }