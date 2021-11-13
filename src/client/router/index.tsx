import React from 'react'
import { BrowserRouter, Route, Redirect, Switch, useRouteMatch, useLocation } from 'react-router-dom'
import { Layouts } from '@components/Layouts'
import { basicRoutes } from './modules/basicRoutes'
import { businessRoutes } from './modules/businessRoutes'
import { testRoutes } from './modules/testRoutes'
const routes = [...basicRoutes, ...businessRoutes, ...testRoutes]
// const modulesFiles = (require as any).context('./modules', true, /\.ts$/)
// console.log(modulesFiles.keys()) // all the files found in the context
// modulesFiles.keys().forEach((modulesFiles:string) => {
//   console.log(`%c 🕰️ 🚀 : modulesFiles `, `font-size:14px;background-color:#08a2ff;color:white;`, modulesFiles);
// }) // require them all

export const menus = [...businessRoutes, ...testRoutes]

const flattenMenus = menus
  .filter(m => !m.ignore)
  .reduce((c, menu) => {
    return [...c, menu, ...(menu.children || []).filter(m => !m.ignore)]
  }, [])

export const findActiveMenu = pathname => {
  const idx = flattenMenus.findIndex(menu => menu.path === pathname)
  if (idx < 0) {
    return [null, []]
  }

  const activeMenu = flattenMenus[idx]
  const breadcrumbs =
    idx > 1
      ? [
          flattenMenus.slice(0, 1)[0],
          ...flattenMenus.slice(1, idx).filter(menu => {
            return activeMenu.path.includes(menu.path)
          }),
          activeMenu
        ]
      : [flattenMenus.slice(0, 1)[0]]

  return [activeMenu, breadcrumbs]
}

const Routes: React.FC = props => {
  const locationState = useLocation()
  return (
    <BrowserRouter>
      <Switch>
        <Layouts>
          {routes
            .filter(router => router.redirect)
            .map((item: myMenu.MenuItem) => {
              return <Route path={item.path} exact key={item.redirect} render={() => <Redirect to={item.redirect as string} />} />
            })}
          {routes.every(v => v.path !== locationState.pathname) ? (
            <Route path={locationState.pathname} exact key={locationState.pathname} render={() => <Redirect to="/404" />} />
          ) : (
            ''
          )}
          {routes
            .filter(router => !router.redirect)
            .map((item: myMenu.MenuItem) => {
              return <Route path={item.path} key={item.path} component={item.component as any} />
            })}
        </Layouts>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
