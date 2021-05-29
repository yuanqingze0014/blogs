import { action, observable } from "mobx";
import { setCookie } from "@/utils/cookie.ts"

class User {
    @observable UserInfo: any = {}

    @action setToken(params: string) {
        setCookie('Authorization', params)
    }

    @action setUserInfo = (language: string) => {

    }
}

export default User;