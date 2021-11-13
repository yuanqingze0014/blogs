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
}

export const initAppInfoParams = (): IappContext => ({
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
  defaultTheme: 'light'
})
