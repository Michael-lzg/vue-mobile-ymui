
import toast from './components/toast'
import dialog from './components/dialog'
const YMUI = {
// 这里是后续补充的组件
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(YMUI).forEach(key => {
    Vue.component(key, YMUI[key])
  })

  Vue.prototype.$toast = toast
  Vue.prototype.$dialog = dialog
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // 通过use方式全部引入
}

const API = {
  install,
  ...YMUI
}

export default API // 通过插件单独引入
