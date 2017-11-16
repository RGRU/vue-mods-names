import Vue from 'vue'
import VueModsNames from '../src/VueModsNames'

Vue.use(VueModsNames)

const vm = new Vue({
  render (h) {
    return h(
      'div', {
        directives: [
          {
            name: 'v-mods-names',
            arg: 'good',
            modifiers: {
              origin: true
            }
          }
        ]
      }
    )
  }
}).$mount()

console.log(vm.$el)

describe('Main test', () => {
  it('Have a base ClassName', () => {
    expect(vm.$el.className).to.equal('good')
  })
})
