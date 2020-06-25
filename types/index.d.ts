import { UIComponent } from './component'
import Vue from 'vue'

export default UIComponent
declare module 'vue/types/vue' {
  interface Vue {
    $amapLoader: () => Promise<any>
  }
}

export class Vmap extends UIComponent {}

export class VmapMarker extends UIComponent {}

export class VmapGeolocation extends UIComponent {}

export class VmapAutoComplete extends UIComponent {}

export class VmapToolBar extends UIComponent {}
