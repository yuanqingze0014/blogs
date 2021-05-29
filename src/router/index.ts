// import { IMenuItem, IRouerItem } from "../utils/interface"
import menus from "./menu"
import React from 'react';

const Empty = React.lazy(() => import('@/components/Empty/Index.tsx'));

const Login = React.lazy(() => import('@/page/Login/Login'));
const Registry = React.lazy(() => import('@/page/Registry/Registry'))
const Home = React.lazy(() => import('@/page/Home/Home'));

const Test1 = React.lazy(() => import('@/page/Home/Test1'))
const Test2 = React.lazy(() => import('@/page/Home/Test2'))


// const ShowApp = React.lazy(() => import('../view/show/Show'));


// // // 错误处理页面
// const NoFound = React.lazy(() => import('../page/error/NoFound'));;
// const NoServer = React.lazy(() => import('../page/error/NoFound'));;

// const SetUpApp = React.lazy(() => import('../view/other/Setup'));

// 获取到重定向数据 默认为数组的第一项
function getFirstRedirect(menus: any[]) {
  // return menus[0]?.children[0].path.split('/')[2];
  return menus[0]?.children[0].path;
}

let routerConfig = {
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registry',
      component: Registry
    },
    {
      path: '/home',
      component: Home,
      children: []
    },

    // {
    //     path: '/show',
    //     component: ShowApp
    // },
    // {
    //   path: '/NoServer',
    //   component: NoServer
    // },
    {
      path: '/',
      // redirect: `/home`,
      redirect: getFirstRedirect(menus)
    },
    // {
    //   path: '/NoFound',
    //   component: NoFound
    // },
    // {
    //   path: '*',
    //   component: NoFound
    // }
  ]
}
routerConfig.routes[2].children.push(...menus as [])
export default routerConfig

