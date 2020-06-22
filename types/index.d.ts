import Vue from 'vue'

import { UIComponent } from './component'


export default UIComponent
declare module 'vue/types/vue' {
  interface Vue {
    $amapLoader: () => Promise<any>
  }
}
