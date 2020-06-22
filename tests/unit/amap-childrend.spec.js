// import { createLocalVue, mount } from '@vue/test-utils'
// import AMapLoader from '../../packages'
// import { AMapConfig } from '../../examples/amap.config'
//
// const localVue = createLocalVue()
// localVue.use(AMapLoader, AMapConfig)
//
// describe('map components', () => {
//
//   const App = localVue.component('app', {
//     data () {
//       return {}
//     },
//
//     template: `
// 		<vmap>
// 			<vmap-marker></vmap-marker>
// 		</vmap>
//     `,
//   })
//
//   const wrapper = mount(App)
//
//   it('should inject parent', async () => {
//     await localVue.nextTick()
//     const provided = (wrapper.vm.$children[0])._provided
//     expect(provided.$amap).toBeDefined()
//   })
// })
//
