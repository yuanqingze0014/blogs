import { atom } from 'recoil'
import { initSettingParams } from '@models/settingModels'

export const settingStateAtom = atom({
  key: 'settingStateAtom',
  default: initSettingParams()
})
