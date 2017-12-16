export default {
  install (Vue, prefix = '_') {
    Vue.directive('mods-names', {
      inserted (el, binding, { context, elm }) {
        context.$baseClass = binding.arg || elm.className
        context.$addOriginClass = binding.modifiers['no-origin']
        elm.setAttribute('class', elm.classList + ' ' + context.$modsNames)
      },
      update (el, binding, { data, elm, context }, oldVnode) {
        if (data.class !== oldVnode.data.class) {
          if (data.class) {
            elm.classList = context.$modsNames + ' ' + data.class
          } else {
            elm.classList = context.$modsNames
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
          let generateAdditionClass = mods => this.$baseClass + prefix + mods

          if (Array.isArray(this.mods)) {
            let classArr = !!this.mods && this.mods.map(i => generateAdditionClass(i))
            // Don't touch original array of classes
            let classArrWithOrigin = classArr.slice(0)
            // If comopnent should render with base class, then add base class to begin of array
            if (!this.$addOriginClass) classArrWithOrigin.unshift(this.$baseClass)
            return classArrWithOrigin.join(' ')
          }

          if (!this.mods) return this.$baseClass

          return !this.$addOriginClass
            ? this.$baseClass + ' ' + generateAdditionClass(this.mods) : generateAdditionClass(this.mods)
        }
      }
    })
  }
}
