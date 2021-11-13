import { lazy } from 'react'
// const BookInfo = lazy(() => import('@pages/book/Index'))
// const Login = lazy(() => import('@pages/Login/Login'))
// const Error404 = lazy(() => import('@pages/error/Error404'))
import BookInfo from '@pages/Book/Index'
import Login from '@pages/Login/Login'
import Error404 from '@pages/Error/Error404'

export const basicRoutes: myMenu.MenuItem[] = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '',
      icon: ''
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: 'Login',
      icon: 'login'
    }
  },
  {
    path: '/book',
    component: BookInfo,
    meta: {
      title: 'bookInfo',
      icon: 'bookInfo'
    }
  },
  {
    path: '/404',
    component: Error404,
    meta: {
      title: '404',
      icon: '404'
    }
  }
]
