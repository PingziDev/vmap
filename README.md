# vmap

### 安装
```shell script
npm i @vita2333/vmap
or 
yarn add @vita2333/vmap
```

### 引入
在`main.js`中添加
```javascript
import VueAmapLoader from '@vita2333/vmap'

Vue.use(VueAmapLoader, {
  key: "your key", // 首次调用load必须填写key
  plugins: [],  // 同步加载的插件列表
  version: "2.0",     // JSAPI 版本号
})
```

### 使用
```vue
<template>
    <vmap></vmap>
</template>

<script>
  import { VueAmap } from '@vita2333/vmap'

  export default {
     components:{ VueAmap }
  }
</script>
```

### Demo
[https://vita2333.github.io/vmap](https://vita2333.github.io/vmap/#/)


### 开发踩坑
设置全局变量
```javascript
global.AMap=xxx
```

转换思路,巧妙利用callback
```javascript
   function getMap(callback) {
        const checkForMap = () => {
          if (this.map) {
            callback(this.map)
          } else {
            setTimeout(checkForMap, 50)
          }
        }

        checkForMap()
   }
```
