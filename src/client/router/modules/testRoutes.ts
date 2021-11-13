import { lazy } from 'react'
const useCallback = lazy(() => import('../../pages/home/useCallback'))
const useMemo = lazy(() => import('../../pages/home/useMemo'))

export const testRoutes: myMenu.MenuItem[] = [
  {
    path: '/useCallback',
    component: useCallback,
    ignore: true,
    meta: {
      title: 'useCallback',
      icon: 'useCallback'
    }
  },
  {
    path: '/useMemo',
    component: useMemo,
    ignore: true,
    meta: {
      title: 'useMemo',
      icon: 'useMemo'
    }
  }
]
