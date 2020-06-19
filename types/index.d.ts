import Vue from 'vue'

import { VueAmap } from './vue-amap'
import { UIComponent } from './component'

export {
  VueAmap,
}

export default UIComponent

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
export interface AMap extends Options {
  Map: new (
    div: string | Vue | Element | Vue[] | Element[],
    options?: MapOptions) => Map
  Geolocation: new(options?: GeolocationOptions) => Geolocation

}

export interface Options {
  [x: string]: any
}

export interface GeolocationOptions extends Options {
}

export interface Geolocation {
  getCurrentPosition (
    callback: any): void;

  getCityInfo (
    callback: any): void;
}

export interface Map {
  destroy (): void

  setCenter (center: number[], immediately?: boolean, duration?: number): void

  [x: string]: any
}

export interface MapOptions extends Options {
  center?: number[]
  zoom?: number
  layers?: any[]
}
