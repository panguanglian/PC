import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home'
import individualBusiness from '@/components/home/individualBusiness'
import personalStore from '@/components/home/personalStore'
import idInfo from '@/components/home/enterprise/idInfo'
import storeInfo from '@/components/home/enterprise/storeInfo'
import flagShip from '@/components/home/flagShip'
import generalStore from '@/components/home/generalStore'
import Businesslicense from '@/components/home/Businesslicense'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/personalStore',
            name: 'personalStore',
            component: personalStore
        },
        {
            path: '/individualBusiness',
            name: 'individualBusiness',
            component: individualBusiness
        },
        {
            path: '/idInfo',
            name: 'idInfo',
            component: idInfo
        },
        {
            path: '/storeInfo',
            name: 'storeInfo',
            component: storeInfo
        },
        {
            path: '/flagShip',
            name: 'flagShip',
            component: flagShip
        },
        {
            path:'/generalStore',
            name:'generalStore',
            component: generalStore
        },
        {
            path:'/Businesslicense',
            name:'Businesslicense',
            component: Businesslicense
        }
        
    ]

})