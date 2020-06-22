import expect from 'expect'
import { createLocalVue, mount } from '@vue/test-utils'
import AMapLoader from '../../packages'
import { AMapConfig } from '../../examples/amap.config'
import VueAmap from '../../packages/VueAmap.vue'
import simple from 'simple-mock'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

localVue.use(AMapLoader, AMapConfig)

class mockClass {
  constructor() {

  }
}

const mockAMap = {
  Map: mockClass,
}

simple.mock(localVue.prototype, '$amapLoader', () => Promise.resolve(mockAMap))
const wrapper = mount(VueAmap, { localVue })

describe('load map', () => {
  it('should set $amapLoader', () => {
    expect(wrapper.vm.$amapLoader).toBeDefined()
  })

  it('should async get amap', async () => {
    const loader = wrapper.vm.$amapLoader
    const amap = await loader()
    expect(amap).toEqual(mockAMap)
  })
})

describe('props', () => {

  it('should be undefined when no props', () => {
    expect((wrapper.vm).filterProps).toBeUndefined()
  })
  it('should render props', () => {
    const wrapper = mount(VueAmap, {
      localVue, propsData: { zoom: 20 },
    })
    expect((wrapper.vm).optionsProps.zoom).toEqual(20)
  })
})

describe('data', () => {
  it('should set map', async () => {
    await flushPromises()
    expect(wrapper.vm.$data.map).toBeDefined()
  })
})

describe('provide', () => {
  it('should provide get', async () => {
    wrapper.vm._provided.getMap(map => {
      expect(map).toBeDefined()
    })
  })
})

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
