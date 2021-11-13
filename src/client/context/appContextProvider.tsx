/* eslint-disable no-use-before-define, @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import { AppContext, IappContext } from './appContext'

const AppProvider = ({ children }: React.Props<{ value: IappContext }>) => {
  const changeData = (data: any) => {
    changeAppState(prevState => ({
      ...prevState,
      defaultTheme:data
    }))
  }

  const initAppState: IappContext = {
    themes: {
      light: {
        foreground: '#000000',
        background: '#eeeeee'
      },
      dark: {
        foreground: '#ffffff',
        background: '#222222'
      }
    },
    defaultTheme: 'light',
    changeData
  }

  const [appState, changeAppState] = useState(initAppState)

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>
}

export default AppProvider
