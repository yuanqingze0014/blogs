declare namespace myMenu {
  interface MenuItem {
    redirect?: string
    path: string
    component?: Function
    ignore?: boolean
    meta: {
      title: string
      icon: string
    }
    children?: Array<MenuItem>
  }
}
