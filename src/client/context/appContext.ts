import React from 'react'

export interface IappContext {
  themes: {
    light: {
      foreground: string
      background: string
    }
    dark: {
      foreground: string
      background: string
    }
  }
  defaultTheme: string
  changeData(data: string): void
}

// 初始化 context，具体的方法在 provider 中实现
export const globalData: IappContext = {
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
  changeData: () => {}
}

export const AppContext = React.createContext<IappContext>(globalData)
