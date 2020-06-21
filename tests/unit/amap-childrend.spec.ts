import { createLocalVue, mount } from '@vue/test-utils'
import MaoLoader from '../../packages'
import { AMapConfig } from '../../examples/amap.config'

const localVue = createLocalVue()
localVue.use(MaoLoader, AMapConfig)

describe('map components', () => {
  const App = localVue.component('app', {
    data () {
      return {}
    },

    template: `
		<vue-amap>
			<vue-amap-marker></vue-amap-marker>
		</vue-amap>
    `,
  })

  const wrapper = mount(App)

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should inject parent', async () => {
    await localVue.nextTick()
    const provided = (wrapper.vm.$children[0] as any)._provided
    expect(provided.$amap).toBeDefined()
  })
})

