import { lazy } from 'react'
import { Layouts } from '@components/Layouts'
// const Home = lazy(() => import('@pages/home/Home'))
// const FilesIndexPage = lazy(() => import('@pages/Files/Index'))
// const NewsIndexPage = lazy(() => import('@pages/News/Index'))
// const VisitPage = lazy(() => import('@pages/Visit/Visit'))
// const SettingPage = lazy(() => import('@pages/Setting/Setting'))
import Home from '@pages/Home/Home'
import FilesIndexPage from '@pages/Files/Index'
import NewsIndexPage from '@pages/News/Index'
import VisitPage from '@pages/Visit/Visit'
import SettingPage from '@pages/Setting/Setting'

export const businessRoutes: myMenu.MenuItem[] = [
  {
    path: '/working',
    component: Home,
    meta: {
      title: 'menus.working',
      icon: 'dashboard'
    },
  },
  {
    path: '/file',
    redirect:'/file/index',
    meta: {
      title: 'menus.file',
      icon: 'folder-open'
    },
    children: [
      {
        path: '/file/index',
        component: FilesIndexPage,
        meta: { title: 'menus.file.index', icon: 'folder-open' }
      }
    ]
  },
  {
    path: '/news',
    redirect:'/news/index',
    meta: {
      title: 'menus.news',
      icon: 'message'
    },
    children: [
      {
        path: '/news/index',
        component: NewsIndexPage,
        meta: { title: 'menus.news.index', icon: 'folder-open' }
      }
    ]
  },
  {
    path: '/visit',
    component: VisitPage,
    meta: {
      title: 'menus.visit',
      icon: 'project'
    },
  },
  {
    path: '/setting',
    component: SettingPage,
    meta: {
      title: 'menus.setting',
      icon: 'setting'
    },
  }
]
