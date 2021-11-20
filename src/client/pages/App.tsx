import * as React from 'react'
import Routes from '@router/index'
import { RecoilRoot } from 'recoil'
// compoonents
import { ThemeConfig } from '@components/ThemeConfig'

// type AppProps = {
//   children: React.ReactChildren
//   isAuthenticated: boolean
//   errorMessage: string
//   user: User
//   isFetching: boolean
//   signInUser: typeof thunkAuth
//   signOutUser: typeof thunkAuth
// } & WithStyles<typeof styles> &
//   WithWidth

// interface AppState {
//   navDrawerOpen: boolean
//   isSmallScreen: boolean
//   showDashboard: boolean
// }

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('==============', error, errorInfo)
  }

  render() {
    return (
      <>
        <RecoilRoot>
          <Routes />
          <ThemeConfig />
        </RecoilRoot>
      </>
    )
  }
}
export default App
