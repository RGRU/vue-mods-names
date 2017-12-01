export default {
  install (Vue, prefix = '_') {
    Vue.directive('mods-names', {
      inserted (el, binding, vnode) {
        vnode.context.$baseClass = binding.arg || vnode.elm.className
        vnode.context.$addOriginClass = binding.modifiers['no-origin']
        vnode.elm.classList += ' ' + vnode.context.$modsNames
      },
      update (el, binding, vnode, oldVnode) {
        if (vnode.data.class !== oldVnode.data.class) {
          if (vnode.data.class) {
            vnode.elm.classList = vnode.context.$modsNames + ' ' + vnode.data.class
          } else {
            vnode.elm.classList = vnode.context.$modsNames
          }
        }
      }
    })
    Vue.mixin({
      data () {
        return { $baseClass: null, $addOriginClass: true }
      },
      props: {
        mods: {
          type: [ String, Array ]
        }
      },
      computed: {
        $modsNames () {
          if (Array.isArray(this.mods)) {
            let classArr = !!this.mods && this.mods.map(i => this.$baseClass + prefix + i)
            let classArrWithOrigin = classArr.slice(0)
            if (!this.$addOriginClass) classArrWithOrigin.unshift(this.$baseClass)
            return classArrWithOrigin.join(' ')
          }

          if (!this.mods) return this.$baseClass

          return !this.$addOriginClass
            ? this.$baseClass + ' ' + this.$baseClass + prefix + this.mods : this.$baseClass + prefix + this.mods
        }
      }
    })
  }
}
