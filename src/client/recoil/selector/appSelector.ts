import { selector } from 'recoil'
import { appStateAtom } from '../atoms/appAtoms'
import { initAppInfoParams, IappContext } from '@models/appModels'
export const appStateSelector = selector({
  key: 'appStateSelector',
  get: ({ get }) => {
    return get(appStateAtom)
  },
  set: ({ set }, newVal: any) => {
    console.log(`%c 👻 🚀 : newVal `, `font-size:14px;background-color:#80f390;color:black;`, newVal)
    set(appStateAtom, newVal)
  }
})
