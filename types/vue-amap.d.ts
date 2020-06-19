import { UIComponent } from './component'
import { Map } from './index'

export class VueAmap extends UIComponent {
  getMap (): Map

  getCurrentPosition (): void
}
