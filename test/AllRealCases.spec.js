import Vue from 'vue'
import VueModsNames from '../src/VueModsNames'

import GoodOrigin from './GoodOrigin.vue'
import GoodWithoutOrigin from './GoodWithoutOrigin.vue'
import classNameOrigin from './classNameOrigin.vue'
// import ClassNameWithoutOrigin from './ClassNameWithoutOrigin.vue'

let baseClass = 'good'

Vue.use(VueModsNames)

let createVM = (ctx, props) => {
  let Constructor = Vue.extend(ctx)
  return new Constructor({ propsData: { mods: props } }).$mount()
}

describe('Main test', () => {
  it('Has one mod + no-origin + baseClass(arg)', () => {
    let vm = createVM(GoodOrigin, 'first-mod')
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has array of mod + no-origin + baseClass(arg)', () => {
    let vm = createVM(GoodOrigin, ['first-mod', 'second-mod'])
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has one mod + no-origin - baseClass(arg)', () => {
    let vm = createVM(classNameOrigin, 'first-mod')
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has array of mod + no-origin - baseClass(arg)', () => {
    let vm = createVM(classNameOrigin, ['first-mod', 'second-mod', 'third'])
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_third')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).not.to.be.true
  })

  it('Has no mod + no-origin + baseClass(arg)', () => {
    let vm = createVM(GoodOrigin)
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).not.to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has no mod + no-origin - baseClass(arg)', () => {
    let vm = createVM(classNameOrigin)
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).not.to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has one mod - no-origin + baseClass(arg)', () => {
    let vm = createVM(GoodWithoutOrigin, 'first-mod')
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has array of mod - no-origin + baseClass(arg)', () => {
    let vm = createVM(GoodWithoutOrigin, ['first-mod', 'second-mod'])
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has one mod - no-origin - baseClass(arg)', () => {
    let vm = createVM(GoodWithoutOrigin, 'first-mod')
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has array of mod - no-origin - baseClass(arg)', () => {
    let vm = createVM(GoodWithoutOrigin, ['first-mod', 'second-mod'])
    expect(vm.$el.classList.contains(baseClass + '_first-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass + '_second-mod')).to.be.true
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })

  it('Has no mods - no-origin - baseClass(arg)', () => {
    let vm = createVM(GoodWithoutOrigin)
    expect(vm.$el.classList.contains(baseClass)).to.be.true
  })
})
