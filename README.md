# vue-mods-names
> Simple adding mods to all components class names in your vue app

## Installation

```js
npm i vue-mods-names -D
```

# Usage

```js
import VueModsNames from './VueModsNames'

Vue.use(VueModsNames)
```
```html
<!-- in your components without main class: -->
<div v-mods-names:close></div>

<!-- in your components with main class: -->
<div v-mods-names:close.origin></div>
```

> If you use component close with this template:

```html
<!-- close component -->
<div v-mods-names:close.origin></div>
```

And you include it in your app, you can send props to your component via mods. It can be String or Array of strings. For example:
```html
  <div class="main-page">
    <Close :mods="['good', 'awesome']">
  </div>
```
And result will be:
```html
  <div class="close close_good close_awesome"></div>
```

Yeah, if you use same workflow this plugin will be very helpful for you and save a little time for you and avoid to routine job.

## Reasons of using
This plugin will be very helpful if you using some kind of methodology for manage classes with modifications (`mods`) of your components and you use common method for reach this.

Imagine that you have a component with class `good`
```html
<div class="good">
  My awesome component in main page
</div>
<style>
.good {
  color: black;
}
</style>
```

But in article page the component has to be with other styles. For example with red color text. If you using some methodology, you may want to define addition modifications for your component. It can made like this:
```html
<div class="good good_red-text">
  My awesome component in main page
</div>
<style>
.good {
  color: black;
}

.good_red-text {
  color: red;
}
</style>
```

Of course you should use modifications as props and manage them by including component. For example finally you'll made `good` component like this:
```html
<div class="good" :class="classWithMod">
  My awesome component in main page
</div>
<script>
export default {
  props: ['mods']
  computed: {
    classWithMod() {
      return 'good_' + this.mods
    }
  }
}
</script>
```

And you can using your component in other places like this:
```html
<!-- main page -->
<Good />

<!-- article page -->
<Good mods="red-text">
```

If your typicall workflow is something like this and you always use modifications for classes, than you'll be happy to use this plugin because it's allow you to set this behavior for all components in your application.
Also vue-mods-names allow to set prefix between className and mods. And the most helpful feature is allowing to send props like `Array` or `String`
