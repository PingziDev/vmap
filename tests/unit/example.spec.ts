import { createLocalVue, mount } from '@vue/test-utils'
import MaoLoader, { VueAmap } from '../../packages'
import { AMapConfig } from '../../examples/amap.config'

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
    expect((wrapper.vm as any).filterProps).toBeUndefined()
  })
  it('should render props', () => {
    const wrapper = mount(VueAmap, {
      localVue, propsData: { zoom: 20 },
    })
    expect((wrapper.vm as any).optionsProps.zoom).toEqual(20)
  })
})

describe('test events', () => {
  it('should pass event', (done) => {
    const wrapper = mount(VueAmap, {
      localVue, propsData: {
        events: {

          click: (map: any) => {
            expect(map).toBeDefined()
            done()
          },
        },
      },
    })
    wrapper.trigger('click')
  })
})
