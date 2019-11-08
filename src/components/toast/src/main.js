import Vue from 'vue'
import Main from './main.vue'

let Toast = Vue.extend(Main)

let instance
const toast = function (options) {
  options = options || {}
  instance = new Toast({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast
