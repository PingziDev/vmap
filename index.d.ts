declare module 'vue/types/vue' {
  interface Vue {
    $amapLoader: () => Promise<AMap>
  }
}

/**
 * @link https://lbs.amap.com/api/jsapi-v2/guide/abc/load
 */
export interface AMapLoaderOptions {
  key: string; // 申请好的Web端开发者Key，首次调用 load 时必填
  version: string; // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins?: string[]; // 插件列表
}

/**
 * @link https://lbs.amap.com/api/jsapi-v2/documentation
 */
export interface AMap {
  Map: new (
    div: string | Vue | Element | Vue[] | Element[],
    options?: MapOptions) => Map

  [x: string]: any
}

export interface Map {
  setCenter: () => void // todo 完善类型
  destroy: () => void

  [x: string]: any
}

export interface MapOptions {
  center?: number[]
  zoom?: number
  layers?: any[]
}
