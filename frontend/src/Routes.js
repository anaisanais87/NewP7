import HomePage from './components/HomePage'
// import FooterPage from './FooterPage'
import LoginUser from './components/LoginUser'
import RegisterUser from './components/RegisterUser'
import WallActu from './components/WallActu'
import UpdateProfile from './components/UpdateProfile'


export default [
    {path: '/', component: HomePage},
    {path: '/LoginUser', component: LoginUser},
    {path: '/RegisterUser', component: RegisterUser},
    {path: '/WallActu', component: WallActu},
    {path: '/UpdateProfile', component: UpdateProfile},
    
]