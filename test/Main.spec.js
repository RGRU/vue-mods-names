import Vue from 'vue'
import VueModsNames from '../src/VueModsNames'

import GoodOrigin from './GoodOrigin.vue'
import GoodWithoutOrigin from './GoodWithoutOrigin.vue'
import classNameOrigin from './classNameOrigin.vue'
import ClassNameWithoutOrigin from './ClassNameWithoutOrigin.vue'

let baseClass = 'good'

Vue.use(VueModsNames)

describe('Main test', () => {
  it('Has one mod + origin + baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodOrigin)
    let props = {
      propsData: {
        mods: 'first-mod'
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has array of mod + origin + baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodOrigin)
    let props = {
      propsData: {
        mods: ['first-mod', 'second-mod']
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has one mod + origin - baseClass(arg)', () => {
    let Constructor = Vue.extend(classNameOrigin)
    let props = {
      propsData: {
        mods: 'first-mod'
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has array of mod + origin - baseClass(arg)', () => {
    let Constructor = Vue.extend(classNameOrigin)
    let props = {
      propsData: {
        mods: ['first-mod', 'second-mod', 'third']
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_third')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has no mod + origin + baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodOrigin)
    let vm = new Constructor().$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).not.to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has no mod + origin - baseClass(arg)', () => {
    let Constructor = Vue.extend(classNameOrigin)
    let vm = new Constructor().$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).not.to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has one mod - origin + baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodWithoutOrigin)
    let props = {
      propsData: {
        mods: 'first-mod'
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has array of mod - origin + baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodWithoutOrigin)
    let props = {
      propsData: {
        mods: ['first-mod', 'second-mod']
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has array of mod - origin + baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodWithoutOrigin)
    let props = {
      propsData: {
        mods: ['first-mod', 'second-mod']
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has one mod - origin - baseClass(arg)', () => {
    let Constructor = Vue.extend(GoodWithoutOrigin)
    let props = {
      propsData: {
        mods: 'first-mod'
      }
    }
    let vm = new Constructor(props).$mount()
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  // it('Has array of mod - origin - baseClass(arg)')
  //
  // it('Has no mod - origin + baseClass(arg)')
  //
  // it('Has no mod - origin - baseClass(arg)')
})
