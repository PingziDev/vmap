import {
  Table, TableColumn,
} from 'element-ui'

import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import VueAmapLoader from '@vita2333/vmap'
import { AMapConfig } from '../../examples/amap.config'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(VueAmapLoader, AMapConfig)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(VueHighlightJS)
}
