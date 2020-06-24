import expect from 'expect'
import { createLocalVue, mount } from '@vue/test-utils'
import AMapLoader from '../../packages'
import { AMapConfig } from '../../examples/amap.config'
import VueAmap from '../../packages/Vmap.vue'
import simple from 'simple-mock'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

localVue.use(AMapLoader, AMapConfig)

class mockClass {
  constructor() {

  }

  setZoom() {}

  on(name) {

  }

  off() {

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
    expect((wrapper.vm).mapOptions).toBeUndefined()
  })
  it('should render props', () => {
    const wrapper = mount(VueAmap, {
      localVue, propsData: { zoom: 20 },
    })
    expect((wrapper.vm).mapOptions.zoom).toEqual(20)
  })
})

describe('data', () => {
  it('should set mapComponent', async () => {
    await flushPromises()
    expect(wrapper.vm.$data.mapComponent).toBeDefined()
  })
})

describe('provide', () => {
  it('should provide get', async () => {
    wrapper.vm._provided.getMap(map => {
      expect(map).toBeDefined()
    })
  })
})
