import { selector } from 'recoil'
import { settingStateAtom } from '../atoms/settingAtom'
import { initSettingParams, ISettingProps } from '@models/settingModels'

export const settingStateSelector = selector({
  key: 'settingStateSelector',
  get: ({ get }) => {
    return get(settingStateAtom)
  },
  set: ({ set }, newVal: any) => {
    console.log(`%c 👻 🚀 : newVal `, `font-size:14px;background-color:#80f390;color:black;`, newVal)
    set(settingStateAtom, newVal)
  }
})
