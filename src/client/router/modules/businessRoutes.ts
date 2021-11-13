import { lazy } from 'react'
import { Layouts } from '@components/Layouts'
const Home = lazy(() => import('@pages/home/Home'))
const FilesIndexPage = lazy(() => import('@pages/Files/Index'))
const NewsIndexPage = lazy(() => import('@pages/News/Index'))
const HistoryPage = lazy(() => import('@pages/History/History'))
const SettingPage = lazy(() => import('@pages/Setting/Setting'))


export const businessRoutes: myMenu.MenuItem[] = [
  {
    component: Home,
    path: '/working',
    meta: {
      title: '工作台',
      icon: 'dashboard'
    },
  },
  {
    component: Layouts,
    path: '/file',
    meta: {
      title: '文件管理',
      icon: 'folder-open'
    },
    children: [
      {
        path: '/file/index',
        component: FilesIndexPage,
        meta: { title: '图片管理', icon: 'folder-open' }
      }
    ]
  },
  {
    component: Layouts,
    path: '/news',
    meta: {
      title: '消息管理',
      icon: 'message'
    },
    children: [
      {
        path: '/news/index',
        component: NewsIndexPage,
        meta: { title: '消息配置管理', icon: 'folder-open' }
      }
    ]
  },
  {
    component: HistoryPage,
    path: '/history',
    meta: {
      title: '访问统计',
      icon: 'project'
    },
  },
  {
    component: SettingPage,
    path: '/setting',
    meta: {
      title: '系统设置',
      icon: 'setting'
    },
  }
]
