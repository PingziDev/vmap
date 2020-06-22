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

异步组件测试, 通过`simple-mock`mock异步操作
```javascript
simple.mock(localVue.prototype, '$amapLoader', () => Promise.resolve(mockAMap))
```

几种等待异步更新的方法
```javascript
Vue.nextTick() // 必须是vue内部的异步更新,如:trigger('click'),在下一个hook完成更新
async()=>{ await Promise() } 
await flushPromises()
```


转换思路,巧妙利用callback来处理异步更新
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


//todo setPropWatchers() 数据双向绑定=>调用amap对应的函数 

