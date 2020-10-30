# vmap 
vue + 高德地图amap2.0, 持续开发中...
 
## 下载
```shell script
npm i @vita2333/vmap
```
或者
```shell script
yarn add @vita2333/vmap
```

## 引入
在`main.js`中添加
```javascript
import Vmap from '@vita2333/vmap'

Vue.use(Vmap, {
  key: "your key", // 首次调用load必须填写key
  plugins: [],  // 同步加载的插件列表
  version: "2.0",     // JSAPI 版本号
})
```

## 使用
```vue
<template>
    <vmap></vmap>
</template>

<script>
  import { vmap } from '@vita2333/vmap'

  export default {
     components:{ vmap }
  }
</script>
```

## 文档
[使用文档](https://vita2333.github.io/vmap/)


## 组件开发
关联本地项目到@node_modules/下
```
npm link @vita2333/vmap          
```

`package.json`下`scripts`
```javascript
    "libs:build"  // 打包本项目核心libs 
    "docs:dev"  //  开发文档 
    "docs:build"  // 
    "docs:deploy"  // 
    "examples:serve"  // 组件示例
    "examples:build"  // 
    "examples:lint"  // 
    "test:unit"  // 
```

更新代码
```shell script
yarn version  # 更新package.json version
git push
yarn docs:deploy # git subtree push
npm publish  # 更新npm源
```
