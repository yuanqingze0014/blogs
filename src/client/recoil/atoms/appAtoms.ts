import { atom } from 'recoil'
import { initAppInfoParams } from '@models/appModels'

export const appStateAtom = atom({
  key: 'appStateAtom',
  default: initAppInfoParams()
})
