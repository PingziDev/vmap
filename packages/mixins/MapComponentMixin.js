/**
 * 自定义方法:
 * installComponent(map)
 * uninstallComponent(map)
 */
export default {
  props: [
    // event
    'events',
  ],
  inject: ['getMap'],
  mounted() {
    this.getMap(map => {
      this.installComponent && this.installComponent(map)
      this.uninstallComponent && this.$once('hook:destroy', () => {
        this.uninstallComponent(map)
      })
    })
  },
  render(createElement, context) {
    return null
  },
}
