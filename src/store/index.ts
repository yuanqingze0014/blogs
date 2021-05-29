import Test from "./modules/test"
import User from './modules/user/index'
import Menu from './modules/menu/index'
import Language from './modules/language/index'


export default {
  TestStore: new Test(),
  UserStore: new User(),
  MenuStore: new Menu(),
  LanguageStore: new Language(),
}
