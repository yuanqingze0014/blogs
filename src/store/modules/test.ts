import { action, observable} from 'mobx';

export default class Test {
  @observable
  str:string = 'http://localhost:8088'

  @action
  setUrl(url:string){
    this.str = url
  }
}
