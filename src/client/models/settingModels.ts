import zhCN from '@language/zh'
import enUS from '@language/en'
const message = {
  en: enUS,
  zh: zhCN
}

export interface ISettingProps {
  collapsed: boolean
  locale: string
  langauge: any
}

export const initSettingParams = (): ISettingProps => ({
  collapsed: false,
  locale: 'zh',
  langauge: message['zh']
})
