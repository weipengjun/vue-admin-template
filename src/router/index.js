import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'
import user from '@/components/User'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: '主页',
            component: home,
            children: [{
                path: '/home/user',
                name: '用户',
                component: user
            }]
        },
        {
            path: '/login',
            name: '登录页面',
            component: login
        }
    ]
})