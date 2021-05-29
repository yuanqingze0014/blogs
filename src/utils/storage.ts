interface StorageInterface {
  //设置localStorage
  set?: (key?: string, value?: any) => void,
  //获取localStorage,会自动转json
  get?: (key?: string) => string | object,
  //是否含有key
  has?: (key?: string) => Boolean,
  //移除
  remove?: (key?: string) => void,
  //操作SessionStorage
  session?: {
    //设置SessionStorage
    set?: (key?: string, value?: string) => void,
    //设置SessionStorage，会自动转json
    get?: (key?: string) => string | object,
    //设置SessionStorage
    has?: (key?: string) => Boolean,
    //通过key移除
    remove?: (key?: string) => void,
  }
}

let storage: StorageInterface = {};
//加方法
const extend = (s: Storage) => {
  return {
    set(key: string, value: any) {
      if (typeof value == 'object') {
        s.setItem(key, JSON.stringify(value));
      } else {
        s.setItem(key, value);
      }
      if (value == undefined || value == null) {
        s.removeItem(key);
      }
    },
    get(key: string) {
      let item = s.getItem(key);
      try {
        return JSON.parse(item as any);
      } catch (e) {
        return item;
      }
    },
    has(key: string) {
      return !!s.getItem(key);
    },
    remove: (key: string) => {
      s.removeItem(key);
    },
  };
};

Object.assign(storage, extend(window.localStorage));
Object.assign(storage, {
  session: extend(window.sessionStorage),
});


export default storage;

