let VueModsNames = {
  install (Vue, prefix = '_') {
    Vue.directive('mods-names', {
      inserted (el, binding, vnode) {
        vnode.context.baseClass = binding.arg
        vnode.context.addOriginClass = binding.modifiers.origin
        vnode.elm.classList = vnode.context.modsNames
      }
    })
    Vue.mixin({
      data () {
        return { baseClass: null, addOriginClass: false }
      },
      props: {
        mods: {
          type: [String, Array]
        }
      },
      computed: {
        modsNames () {
          if (Array.isArray(this.mods)) {
            let classArr = !!this.mods && this.mods.map(i => this.baseClass + prefix + i)
            return this.addOriginClass ? classArr.unshift(this.baseClass) : classArr
          }
          return this.addOriginClass ? this.baseClass + ' ' + this.baseClass + prefix + this.mods : this.baseClass + prefix + this.mods
        }
      }
    })
  }
}

export default VueModsNames
