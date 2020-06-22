import { createLocalVue, mount } from '@vue/test-utils'
import MaoLoader from '../../packages'
import { AMapConfig } from '../../examples/amap.config'
import VueAmap from '../../packages/VueAmap.vue'
import simple from 'simple-mock'

const localVue = createLocalVue()

localVue.use(MaoLoader, AMapConfig)
simple.mock(localVue, '$amapLoader', () => Promise.resolve('AMap'))

describe('load map', () => {
  it('should set $amapLoader', () => {
    expect(localVue.$amapLoader).toBeDefined()
  })

  it('should get amap', async () => {
    const loader = localVue.$amapLoader
    const amap = await loader()
    expect(amap).toEqual('AMap')
  })
})

describe('test props', () => {

  it('should be undefined when no props', () => {
    const wrapper = mount(VueAmap, { localVue })
    expect((wrapper.vm).filterProps).toBeUndefined()
  })
  it('should render props', () => {
    const wrapper = mount(VueAmap, {
      localVue, propsData: { zoom: 20 },
    })
    expect((wrapper.vm).optionsProps.zoom).toEqual(20)
  })
})

// todo
// describe('test events', () => {
//   it('should pass event', (done) => {
//     const wrapper = mount(VueAmap, {
//       localVue, propsData: {
//         events: {
//           click: (map: any) => {
//             expect(map).toBeDefined()
//             done()
//           },
//         },
//       },
//     })
//     wrapper.trigger('click')
//   })
// })
