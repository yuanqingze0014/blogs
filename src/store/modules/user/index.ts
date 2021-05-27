import { action, observable } from 'mobx'
import { UserStoreType } from './type'

const User = observable<UserStoreType>({
    userInfo: {}
})

export default User