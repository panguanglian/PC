import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home'
import idInfo from '@/components/home/enterprise/idInfo'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }]

})