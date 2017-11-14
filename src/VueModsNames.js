let VueModsNames = {
  install (Vue, prefix = '_') {
    Vue.mixin({
      props: {
        mods: {
          type: [String, Array]
        },
        baseClass: {
          type: String
        }
      },
      computed: {
        modsNames () {
          let baseClassName = this.baseClass ? this.baseClass : this.$el.classList[0]
          if (Array.isArray(this.mods)) {
            return !!this.mods && this.mods.map(i => baseClassName + prefix + i)
          }
          return baseClassName + prefix + this.mods
        }
      }
    })
  }
}

export default VueModsNames
