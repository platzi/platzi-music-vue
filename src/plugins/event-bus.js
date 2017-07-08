const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
}

export default eventBus
