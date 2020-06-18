import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $amapLoader: () => Promise<any>
  }
}

export interface AmapConfig {
  key: string; // 申请好的Web端开发者Key，首次调用 load 时必填
  version: string; // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins?: string[]; // 插件列表
}
