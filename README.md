# vue-amap2.0

### 安装
```shell script
npm i @vita2333/vue-amap2.0
or 
yarn add @vita2333/vue-amap2.0
```

### 引入
在`main.js`中添加
```javascript
import VueAmapLoader from '@vita2333/vue-amap2.0'

Vue.use(VueAmapLoader, {
  key: "your key", // 首次调用load必须填写key
  plugins: [],  // 同步加载的插件列表
  version: "2.0",     // JSAPI 版本号
})
```

### 使用
```vue
<template>
    <vue-amap></vue-amap>
</template>

<script>
  import { VueAmap } from '@vita2333/vue-amap2.0'

  export default {
     components:{ VueAmap }
  }
</script>
```
