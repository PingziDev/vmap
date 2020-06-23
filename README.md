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
发布dist/到专属分支
```shell script
yarn run build
git commit -m 'update gh-pages'
git subtree push --prefix dist origin gh-pages     
```
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

利用hook事件钩子将事件监听和销毁放在一起,增加代码可读性
```javascript
export default {
    mounted(){
        this.map=xxxx
    },
    destroyed(){
        this.map.destroy()
    }
}
```
替换为
```javascript
export default {
    mounted(){
        this.map=xxxx
        this.$once('hook:destroyed',()=>{
              this.map.destroy()
        })
    },
}
```

函数式组件
```javascript
export default { 
    functional: true
}
```
或者
```html
<template functional>
    <div>xxxxx</div>
</template>
```

传递属性和事件
$attrs: 当组件在调用时传入的属性没有在props里面定义时，传入的属性将被绑定到$attrs属性内（class与style除外，他们会挂载到组件最外层元素上）。并可通过v-bind="$attrs"传入到内部组件中


$listeners: 当组件被调用时，外部监听的这个组件的所有事件都可以通过$listeners获取到。并可通过v-on="$listeners"传入到内部组件中。

//todo setPropWatchers() 数据双向绑定=>调用amap对应的函数 

vuepress基于markdown写vue,所以有没有空行,是否顶格差别很大!!!
这样写出不来
```markdown
<DemoBlock title="测试" desc="基础文档展示">
  <base-demo/>

  <template slot="codeDesc">
   按钮实体
  </template>

  <div v-highlight slot="code" lang="vue">
   <<< @/examples/views/BaseDemo.vue
  </div>
</DemoBlock>
```
必须写成
```markdown
<DemoBlock title="测试" desc="基础文档展示">
  <base-demo/>

  <template slot="codeDesc">
   按钮实体
  </template>

  <div v-highlight slot="code" lang="vue">

   <<< @/examples/views/BaseDemo.vue
   
  </div>
</DemoBlock>
```
坑了我一个下午!!!
