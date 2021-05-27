// import { IMenuItem, IRouerItem } from "../utils/interface"
// import menus from "./routerMenu"
import React from 'react';

//login
const Login = React.lazy(() => import('../page/login/index'));
// const ShowApp = React.lazy(() => import('../view/show/Show'));

const Home = React.lazy(() => import('../page/main/index'));
const Regedit = React.lazy(() => import('../page/regedit/index'));
// // 错误处理页面
const NoFound = React.lazy(() => import('../page/error/NoFound'));;
// const NoServer = React.lazy(() => import('../view/error/NoServer'));;

// const SetUpApp = React.lazy(() => import('../view/other/Setup'));

// 获取到重定向数据 默认为数组的第一项
// function getFirstRedirect(menus: any[]) {
//     return menus[0]?.children[0].path.split('/')[2];
//     // return menus[0]?.children[0].path;
// }

const routerConfig = {
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/main',
            component: Home,
            children: []
        },
        {
            path:'/regedit',
            component:Regedit,
            children:[]
        },
        // {
        //     path: '/setup',
        //     component: SetUpApp
        // },
        // {
        //     path: '/show',
        //     component: ShowApp
        // },
        // {
        //     path: '/NoServer',
        //     component: NoServer
        // },
        {
            path: '/',
            redirect: `/login`
            // redirect: `/main/${getFirstRedirect(menus)}`
        },
        // {
        //     path: '/NoFound',
        //     component: NoFound
        // },
        {
            path: '*',
            component: NoFound
        }
    ]
}
export default routerConfig
