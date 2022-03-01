import { createRouter, createWebHistory } from "vue-router"
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import LoginItem from '../components/Login/LoginItem'
import RegisterItem from '../components/Login/RegisterItem'
// import Register from '../views/Register/Register.vue'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        children: [{
            path: '/login',
            component: LoginItem
        }, {
            path: '/register',
            component: RegisterItem
        }]
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: Register,
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router