import { createLocalVue, mount } from '@vue/test-utils'
import MaoLoader from '../../packages'
import { AMapConfig } from '../../examples/amap.config'
import VueAmap from '../../packages/VueAmap.vue'
import { expect } from 'chai'

const localVue = createLocalVue()
localVue.use(MaoLoader, AMapConfig)

describe('load map', () => {
  it('should set $amapLoader', () => {
    expect(localVue.prototype.$amapLoader).toBeDefined()
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
