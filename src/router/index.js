import Vue from 'vue'
import Router from 'vue-router'
import indexFirst from '@/components/indexFirst'
import Price from '@/components/price'
import publicAnnounce from '@/components/publicAnnounce'
import login from '@/components/login'
import register from '@/components/register'
import inforAboutUs from '@/components/inforAboutUs'
import individualCenter from '@/components/individualCenter'
import setting from '@/components/setting'
import tool from '@/components/tool'
import forget from '@/components/forget'
import mineHelp from '@/components/mineHelp'
import invitation from '@/components/invitation'

import datailBuy from '@/pages/detailBuy'
import countBuy from '@/pages/countBuy'
import orderForm from '@/pages/orderForm'
import aboutUs from '@/pages/aboutUs'
import contactUs from '@/pages/contactUs'
import privacyTreaty from '@/pages/privacyTreaty'
import resetPhone from '@/pages/resetPhone'
import myCount from '@/pages/myCount'
import myLIst from '@/pages/myLIst'
import myBill from '@/pages/myBill'
import getCion from '@/pages/getCion'
import minehelpDetail from '@/pages/minehelpDetail'
import minehelpYuan from '@/pages/minehelpYuan'
import agreement from '@/pages/agreement'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexFirst',
      component: indexFirst
    },
    {
      path: '/price',
      name: 'price',
      component: Price,
      children:[
       	{path:'/datailBuy',name: 'datailBuy',component: datailBuy},
       	{path:'/countBuy',name: 'countBuy',component: countBuy},
       	{path:'/orderForm',name: 'orderForm',component: orderForm},
      ]
    },
    {
      path: '/publicAnnounce',
      name: 'publicAnnounce',
      component: publicAnnounce
    },
     {
      path: '/inforAboutUs',
      name: 'inforAboutUs',
      component: inforAboutUs,
       children:[
       	{path:'aboutUs',name: 'aboutUs',component: aboutUs},
       	{path:'contactUs',name: 'contactUs',component: contactUs},
       	{path:'privacyTreaty',name: 'privacyTreaty',component: privacyTreaty}
      ]
      	
     },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/resetPhone',
      name: 'resetPhone',
      component:resetPhone
    },
     {
      path: '/tool',
      name: 'tool',
      component:tool
    },
    {
      path: '/individualCenter',
      name: 'individualCenter',
      component:individualCenter,
       children:[
       	{path:'/myCount',name: 'myCount',component: myCount},
       	{path:'/myLIst',name: 'myLIst',component:myLIst},
       	{path:'/myBill',name: 'myBill',component: myBill},
       	{path:'/getCion',name: 'getCion',component:getCion}
      ],
      redirect:'/myCount'
    },
     {
      path: '/forget',
      name: 'forget',
      component:forget
    },
     {
      path: '/mineHelp',
      name: 'mineHelp',
      component:mineHelp,
      children:[
       	{path:'/minehelpDetail',name: 'minehelpDetail',component: minehelpDetail},
       	{path:'/minehelpYuan',name: 'minehelpYuan',component:minehelpYuan},
      ],
      redirect:'/minehelpDetail'
    },
    {
      path: '/invitation',
      name: 'invitation',
      component:invitation
    },
    {
      path: '/agreement',
      name: 'agreement',
      component:agreement
    },
  ]
})
