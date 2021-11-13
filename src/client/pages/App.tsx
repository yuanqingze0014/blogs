import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Routes from '../router/index'
import { Route, Redirect } from 'react-router-dom'

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
  render() {
    return (
      <>
        <RecoilRoot>
          <Routes />
        </RecoilRoot>
      </>
    )
  }
}
export default App