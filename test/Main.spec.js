import Vue from 'vue'
import VueModsNames from '../src/VueModsNames'

Vue.use(VueModsNames)

const vm = new Vue({
  template: '<div v-mods-names:good.origin>Its very good</div>'
})

describe('Main test', () => {
  it('Have a base ClassName', () => {
    expect(vm.$el.className).to.equal('good')
  })
})
