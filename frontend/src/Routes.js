import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import HomePage from './components/HomePage.vue'
import WallActu from './components/WallActu.vue'
import UpdateProfile from './components/UpdateProfile.vue'
import LoginUser from './components/auth/LoginUser.vue'
import RegisterUser from './components/auth/RegisterUser.vue'
import Resource from './components/resources/Resources.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'homePage',
            component: HomePage
        },
        {
            path: '/LoginUser',
            name: 'loginUser',
            component: LoginUser
        },
        {
            path: '/RegisterUser',
            name: 'registerUser',
            component: RegisterUser
        },
        {
            path: '/WallActu',
            name: 'wallActu',
            component: WallActu
        },
        {
            path: '/UpdateProfile',
            name: 'updateProfile',
            component: UpdateProfile
        },
        {
            path: '/Resources',
            name: 'resources',
            component: Resource,
            meta: {
                requiresAuth: true
            }
        },

    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/LoginUser')
    } else {
        next()
    }
})

export default router


