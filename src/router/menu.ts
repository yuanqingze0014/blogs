// import { IMenuItem, IRouerItem } from "../utils/interface"
// import menus from "./routerMenu"
import React from 'react';
import { AppstoreOutlined, UserOutlined, ScheduleOutlined, TableOutlined, MergeCellsOutlined } from '@ant-design/icons';

const Test1Child = React.lazy(() => import('@/page/Home/Test1/Test1Child.tsx'))
const Test1Child2 = React.lazy(() => import('@/page/Home/Test1/Test1Child2.tsx'))


const Test2Child = React.lazy(() => import('@/page/Home/Test2/Index.tsx'))


// const ShowApp = React.lazy(() => import('../view/show/Show'));


// // // 错误处理页面
// const NoFound = React.lazy(() => import('../page/error/NoFound'));;
// const NoServer = React.lazy(() => import('../page/error/NoFound'));;

// const SetUpApp = React.lazy(() => import('../view/other/Setup'));

// 获取到重定向数据 默认为数组的第一项
// function getFirstRedirect(menus: any[]) {
//     return menus[0]?.children[0].path.split('/')[2];
//     // return menus[0]?.children[0].path;
// }

const menus = [
    {
        path: '/home/test1',
        name: 'menus.test1',
        meta: {
            icon: AppstoreOutlined,
            name: 'menus.test1',
            show: true
        },
        children: [
            {
                path: '/home/test1/test1Child',
                component: Test1Child,
                meta: {
                    name: 'menus.test1.test1Child',
                    show: true,
                    // view_id: "main-examPaperClassList"
                }
            },
            {
                path: '/home/test1/test1Child2',
                component: Test1Child2,
                meta: {
                    name: 'menus.test1.test1Child2',
                    show: true,
                    // view_id: "main-examPaperClassList"
                }
            }
        ]
    },
    {
        path: '/home/test2',
        name: 'menus.test2',
        meta: {
            icon: MergeCellsOutlined,
            name: 'menus.test2',
            show: true
        },
        children: [
            {
                path: '/home/test2/test2Child',
                component: Test2Child,
                meta: {
                    name: 'menus.test2.test2Child',
                    show: true,
                    // view_id: "main-examPaperClassList"
                }
            }
        ]
    },
]

export default menus

