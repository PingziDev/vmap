/**
 * 自定义方法:
 * installComponent(map)
 * uninstallComponent(map)
 */
import MapMixin from './MapMixin'

export default {
  ...MapMixin,
  inject: ['getMap'],
  mounted() {
    this.getMap(async map => {
      this.installComponent && await this.installComponent(map)
      this.bindEvents()
      this.uninstallComponent && this.$once('hook:destroy', () => {
        this.uninstallComponent(map)
      })
    })
  },
  render(createElement, context) {
    return null
  }
}
