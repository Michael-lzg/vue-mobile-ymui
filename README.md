# vue-mobile-ui

## 简介

这是一款基于 vue 框架开发的基础 UI 组件，主要包括 toast 和 dialog 插件，后续会不断拓展。
效果图如下：
<img src="./static/toast.png">

## 功能

- toast 组件
- dialog 组件

## 用法

1. 安装依赖

```
npm install --save vue-mobile-ymui
```

2. 引入并使用

```js
import UI from 'vue-mobile-ymui'
Vue.use(UI)
```

## toast

### Props

| name | type   | default | description                                                            |
| ---- | ------ | ------- | ---------------------------------------------------------------------- |
| msg  | String | ''      | 弹窗提示语                                                             |
| type | String | ''      | 弹窗类型：success(成功提示),fail(失败提示),warning(警告),loading(加载) |


## dialog

### Props

| name        | type   | default | description               |
| ----------- | ------ | ------- | ------------------------- |
| title       | String | ''      | 标题                      |
| text        | String | ''      | 文本内容                  |
| type        | String | ''      | 默认纯文本，input(输入框) |
| maxlength   | Number | 20      | 输入的最多字数            |
| confirmText | String | 确定    | 右边按钮                  |
| cancelText  | String | 取消    | 左边按钮                  |

### Events

| name    | params | description  |
| ------- | ------ | ------------ |
| confirm | null   | 选择后的回调 |
| cancel  | ull    | 取消后的回调 |
