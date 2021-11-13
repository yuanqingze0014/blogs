import { lazy } from 'react'
const BookInfo = lazy(() => import('@pages/book/Index'))

const Error404 = lazy(() => import('@pages/error/Error404'))

export const basicRoutes: myMenu.MenuItem[] = [
  {
    path: '/',
    redirect: '/home'
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
