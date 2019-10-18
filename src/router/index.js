import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home'
import individualBusiness from '@/components/home/individualBusiness'
import personalStore from '@/components/home/personalStore'
import idInfoFlagship from '@/components/home/enterprise/idInfoFlagship'
import idInfomonopoly from '@/components/home/enterprise/idInfomonopoly'
import idInfoMonopolize from '@/components/home/enterprise/idInfoMonopolize'
import idinfoordinary from '@/components/home/enterprise/idinfoordinary'

import storeInfoFlagship from '@/components/home/enterprise/storeInfoFlagship'
import storeInfomonopoly from '@/components/home/enterprise/storeInfomonopoly'
import storeInfoMonopoliz from '@/components/home/enterprise/storeInfoMonopoliz'
import storeInfo from '@/components/home/enterprise/storeInfo'

import flagShip from '@/components/home/flagShip'
import generalStore from '@/components/home/generalStore'
import Businesslicense from '@/components/home/Businesslicense'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home',
    },
   
            {
                path: '/home',
                name: 'home',
                component: home,
                meta: {
                    keepAlive: true,
                    requireAuth: true, // 判断是否需要登录
                }
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
                path: '/idInfoFlagship',
                name: 'idInfoFlagship',
                component: idInfoFlagship
            },
            {
                path: '/idInfomonopoly',
                name: 'idInfomonopoly',
                component: idInfomonopoly
            },
            {
                path: '/idInfoMonopolize',
                name: 'idInfoMonopolize',
                component: idInfoMonopolize
            },
            {
                path: '/idinfoordinary',
                name: 'idinfoordinary',
                component: idinfoordinary
            },
            {
                path: '/storeInfoFlagship',
                name: 'storeInfoFlagship',
                component: storeInfoFlagship
            },
            {
                path: '/storeInfomonopoly',
                name: 'storeInfomonopoly',
                component: storeInfomonopoly
            },
            {
                path: '/storeInfoMonopoliz',
                name: 'storeInfoMonopoliz',
                component: storeInfoMonopoliz
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
                path: '/generalStore',
                name: 'generalStore',
                component: generalStore
            },
            {
                path: '/Businesslicense',
                name: 'Businesslicense',
                component: Businesslicense
            },
            {
                path: '/contacthailu',
                name: 'contacthailu',
                component: () => import('@/components/contactUs/contacthailu')
            },
            {
                path: '/downloadclient',
                name: 'downloadclient',
                component: () => import('@/components/Client/downloadclient')
            },
            {
                path: '/rulecenter',
                name: 'rulecenter',
                component: () => import('@/components/ruleCenter/rulecenter')
            },
        
    





    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/login')
    },
    {
        path: '/Forgetpassword',
        name: 'Forgetpassword',
        component: () => import('@/components/login/Forgetpassword')
    },
    {
        path: '/Forgetpasswordtwo',
        name: 'Forgetpasswordtwo',
        component: () => import('@/components/login/Forgetpasswordtwo')
    },
    {
        path: '/Forgetpasswordsuccess',
        name: 'Forgetpasswordsuccess',
        component: () => import('@/components/login/Forgetpasswordsuccess')
    },
    {
        path: '/Choiceoption',
        name: 'Choiceoption',
        component: () => import('@/components/home/Choiceoption')
    },
    {
        path: '/hotelone',
        name: 'hotelone',
        component: () => import('@/components/home/HotelIndustry/hotelone')
    },
    

    ]

})