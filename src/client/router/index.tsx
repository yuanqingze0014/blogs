import React, { Suspense } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { RecoilRoot, useRecoilState } from 'recoil'
import { ISettingProps } from '@models/settingModels'
import { settingStateSelector } from '@recoil/selector/settingSelector'
import { appStateSelector } from '@recoil/selector/appSelector'
// 配置国际化
import { IntlProvider, FormattedMessage } from 'react-intl';; /* react-intl imports */
// components
import { Layouts } from '@components/Layouts'
// routes
import { basicRoutes } from './modules/basicRoutes'
import { businessRoutes } from './modules/businessRoutes'
import { testRoutes } from './modules/testRoutes'

import { LOADING_TIP } from '../constants'
export const routes = [...basicRoutes, ...businessRoutes, ...testRoutes]
// const modulesFiles = (require as any).context('./modules', true, /\.ts$/)
// console.log(modulesFiles.keys()) // all the files found in the context
// modulesFiles.keys().forEach((modulesFiles:string) => {
//   console.log(`%c 🕰️ 🚀 : modulesFiles `, `font-size:14px;background-color:#08a2ff;color:white;`, modulesFiles);
// }) // require them all

export const menus = [...businessRoutes, ...testRoutes]

const basicRoutesList = [...basicRoutes]
const businessRoutesList = [...businessRoutes]

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

const Routes: React.FC = () => {
  const [setting, setSettingAction] = useRecoilState<ISettingProps>(settingStateSelector)

  return (
    <BrowserRouter>
      <IntlProvider locale={setting.locale} messages={setting.langauge}>
        {/* <Suspense fallback={<Loading height="100vh" tip={LOADING_TIP} />}> */}
        <Switch>
          {basicRoutesList
            .filter(router => router.redirect)
            .map((item: myMenu.MenuItem) => {
              return <Route path={item.path} exact key={item.redirect} render={() => <Redirect to={item.redirect as string} />} />
            })}
          {basicRoutesList
            .filter(v => !v.redirect)
            .map(router => (
              <Route key={router.path} exact={true} path={router.path} component={router.component}></Route>
            ))}
          <Layouts>
            {businessRoutesList.map(router =>
              !router.children ? (
                <Route key={router.path} path={router.path} component={router.component}></Route>
              ) : (
                <Route path={router.path} key={router.path}>
                  {router.children &&
                    router.children.map(childRouter => {
                      return <Route exact={true} key={childRouter.path} path={childRouter.path} component={childRouter.component}></Route>
                    })}
                </Route>
              )
            )}
          </Layouts>
        </Switch>
        {/* </Suspense> */}
      </IntlProvider>
    </BrowserRouter>
  )
}

export default Routes
