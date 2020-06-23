import VueHighlightJS from 'vue-highlight.js'
// import 'vue-highlight.js/lib/allLanguages'
import 'highlight.js/styles/atom-one-dark.css'
import VueAmapLoader from '@vita2333/vmap'
import { AMapConfig } from '../../examples/amap.config'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.use(VueAmapLoader, AMapConfig)

  /**
   * 注册所有component
   */
  const requireComponent = require.context(
    // The relative path of the components folder
    '../../examples/views',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /.(vue|js)$/,
  )

  requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)
    const fc = fileName.split('/')
    const f = fc[fc.length - 1]
    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        f.replace(/.*\//, '$1').replace(/\.\w+$/, ''),
      ),
    )

    // Register component globally
    Vue.component(
      componentName,
      componentConfig.default || componentConfig,
    )
  })

  Vue.use(VueHighlightJS)

}
