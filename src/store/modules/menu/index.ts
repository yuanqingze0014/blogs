import { action, observable } from "mobx";
import { HomeOutlined } from '@ant-design/icons'
import storage from "@/utils/storage.ts"

type tagType = {
  name: string
  path: string
  icon?: any
}

class Menu {
  @observable mode: string = storage.session.get('mode') || 'horizontal'
  @observable tagTitleList: tagType[] = [
    {
      name: '',
      path: '/home',
      icon: HomeOutlined,
    }
  ]

  @action changeShowLayout = (mode: string): void => {
    storage.session.set('mode', mode)
    this.mode = mode;
  }

  @action setTagTitle = (params: tagType): void => {
    const isHas = this.tagTitleList.find((tagChild: tagType) => tagChild.path === params.path)
    if (!isHas) {
      this.tagTitleList.push(params)
    }
  }
}

export default Menu;