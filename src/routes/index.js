// Layouts
import { HeaderOnly } from '~/components/Layout'

// Routes
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import SearchPage from '~/pages/Search'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: SearchPage, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }