## Intro

### About CSS methodology

Always we have to create similar components, but that has a different views or small modifications by using in other different places. For reach this goal, developers often use common methodologies for manage CSS class names.
For example BEM. By this methodology each block (component in our case) has custom modifications, that add by same CSS class name with addition modify (`mod`). See example below:

<vuep template="#simpledemo"></vuep>
<script v-pre type="text/x-template" id="simpledemo">
<template>
  <div class="good">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Good component</div>
    <div class="good__button">+</div>
  </div>
</template>

<style>
.good {
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #e0e0e0;
  border-radius: 15px;
}

.good__header {
  width: 100%;
  height: 40px;
  background-color: #bf360c;
  border-radius: 15px 15px 0 0;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
}

.good__strip {
  width: 100%;
  height: 5px;
  background-color: #870000;
}

.good__body {
  padding: 30px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}

.good__button {
  position: absolute;
  bottom: -25px;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #795548;
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
}

.good__button:hover {
  cursor: pointer;
  background-color: #4b2c20;
}
</style>
</script>

We wanna use this component in other place with other colors and without plus button. Following methodology rules we have to add mod to root block class name. This allows to us change view of particular block with mods, but don't break other same blocks without mods. In real case it's look like this example:

> Add class with mod cyan - `good_cyan`. Often you may see version, when developers use `-` instead `__` for blocks. And `--` instead `__` for elements. `vue-mods-names` allow pass any symbols for custom prefix for using in your components. It's not so necessary. Note that, good practice is name mods by them usage on particular page or functional that component implement in this place, but not colors. In our case we use mod `cyan` only for more visibility.

<vuep template="#simpledemo2"></vuep>
<script v-pre type="text/x-template" id="simpledemo2">
<template>
  <div class="good good_cyan">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Good component</div>
    <div class="good__button">+</div>
  </div>
</template>

<style>
.good {
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #e0e0e0;
  border-radius: 15px;
}

.good_cyan .good__header {
  background-color: #00bcd4;
  color: #000;
}

.good_cyan .good__strip {
  background-color: #008ba3;
  color: #000;
}

.good_cyan .good__button {
  display: none;
}

.good__header {
  width: 100%;
  height: 40px;
  background-color: #bf360c;
  border-radius: 15px 15px 0 0;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
}

.good__strip {
  width: 100%;
  height: 5px;
  background-color: #870000;
}

.good__body {
  padding: 30px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}

.good__button {
  position: absolute;
  bottom: -25px;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #795548;
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
}

.good__button:hover {
  cursor: pointer;
  background-color: #4b2c20;
}
</style>
</script>

We use same component, but add one CSS class with mod and now we just need to add custom styles for our component (block) with mod.

``` css
.good_cyan .good__header {
  background-color: #00bcd4;
  color: #000;
}

.good_cyan .good__strip {
  background-color: #008ba3;
  color: #000;
}

.good_cyan .good__button {
  display: none;
}
```

It's look little bit better when you use a preprocessor for CSS:

``` css
.good_cyan .good__header,
.good_cyan .good__strip
  background-color: #00bcd4
  color: #000

.good_cyan .good__button
  display: none
```

Now you may imagine how it will be good, when you can manage view of particular components by these mods. You just write styles in other mod and use them where you need, You may use many of mods in one time. For example, you may add `.good_with-border` and `.good_red` in same component. Also mention, that name of mod choosing by usage component. For example, `.good_main-page` and `.good_article-page` is more better for naming mods, because you can look where this component use at first look and you may not figure out where it use in your templates.

### Components in Vue

This method of manage CSS classes is good for using by component oriented framework and it's even really easy to use. To use component with other mods, you have to define receiving mods via props. In our case it will be look something like this:

`MyComponent.vue <script>`
```js
  export default {
    props: {
      type: String
    }
  }
```

`MyComponent.vue <template>`
```html
<template>
  <div class="good" :class="mods && 'good_' + mods">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Good component</div>
    <div class="good__button">+</div>
  </div>
</template>
```
Now component can receive `mods (String)`, that will be join with base class name of component itself and add it in `class` attribute. After that, you may use your component in other places by pass different props `mods`. And styles for block with particular mod describe in component styles. For example:

```js
// Use component by cyan color
<MyComponent mods="cyan" />

// Use component by view, that made for contacts page
<MyComponent mods="contacts" />
```

In component styles we just add CSS for class with mod, i.e. `.my-component-name_contacts`. It's easy and **IF** you don't use cascades, then your mods will be works as expected and it will not break other elements and root block.

> Author means __cascade__ like this: `div > .my-component-name > div:first-child` (it's just for example). Cascade has more priority than just class name and all your styles will works as unexpected. Also using `id` and `!important` can brake your make-up. In ideal world we assume, that you always following by methodology rules. In real cases many developers used to use same method for manage classes and it's very nice and predictable for other developers.

But now, our component is no flexible enough. To give it ability to receive few mods i.e. `Array` for `mods` props, we have to write computed property in our component and handle cases when `mods` is Array and when it's String.
Actually, it's easy:

`Pseudo code`
```js
// If it is Array just add mod for each
if (mods is Array) {
  return mods.map(item => 'good' + '_' + item)
} else {
  return `good_${mods}`
}
```
But we also need to check exist base class and ability to pass custom symbol of prefix (many developers use `-`, by default plugin use: `_`). And the most reasonable feature, that if you always develop app by same method, then you may want to hide this implementation and don't think about it more. Any component in your app may receive `mods` like String or Array. You should use `vue-mods-names` to achieve it. It's hide all functional of adding mods for components from your eyes.

> Take this opportunity to say, that plugin really simple and lightweight. It's have no many code, just little bit more, then example above. Therefore `Contributions welcome`. We publish it to GitHub because it's really helps to us (RG - Russian Newspaper) in our projects on Vue and we hope this can helps to you. We didn't make some genius.

### Helpful of vue-mods-names

**Benifits:**
1. Every component in your app has ability to receive `mods` via props. (You don't need to add this behavior to many separate components)
2. Your code will be cleaner. All works with mods hide in plugin.
3. You may pass `mods` like `String` or `Array` to any component.
4. Setting up usage of base class (root class name). See `"Advanced usage"`

## Install

So typically

```js
npm i vue-mods-names -D
```

## Usage
```js
import VueModsNames from 'vue-mods-names'

Vue.use(VueModsNames)
```
If you want to change prefix (by default is equal: `_`), then just pass it in plugin options, like this:
```js
import VueModsNames from 'vue-mods-names'

Vue.use(VueModsNames, { prefix: '-' })
```
After that any component in your app is ready to use mods. It will work if you declare name of base class in directive `v-mods-names:`

Declare behavior by adding special directive `v-mods-names` in your template. `good` - is name of base class, that will join with other mods.

`Good.vue`
```html
<!-- Template of 'Good' component, that will be include in other places -->
<div v-mods-names:good>It's cool</div>
```

Now we may use component with different mods:

`main page`
```html
<Good mods="main" />
```

In the issue you have component on main page, that has classes after render:

```html
<div class="good good_main">It's cool</div>
```

> All style modifications of component typically describe in component file itself (one file component).

```css
.good {}

.good_main {}

.good_big {}
```

You can pass Array of mods:

```html
<Good :mods="['main', 'big']" />
```

After render we get this:

```html
<div class="good good_main good_big">It's cool</div>
```

## Advanced usage

### no-origin

If you need to use only class names with mods (without base class), then you may use mod - 'no-origin' of directive `v-mods-names`. It's add after name of your base class:

`Awesome.vue`
```html
<!-- Шаблон компонента Awesome -->
<div v-mods-names:awesome.no-origin>Awesome</div>
```

Now if we use component in this way:
```html
<Awesome :mods="['main', 'big']" />
```

It's render to this:

```html
<div class="awesome_main awesome_big">Awesome</div>
```

> It works similar for one mod (type: String) and for Array of mods.

Also you may use plugin like this:

```html
<Awesome class="awesome" mods="big" />
```

Component renders with base class, that you write by your hands and generated class name with mod.

```html
<div class="awesome awesome_big"></div>
```

> But it's senselessly and more easy to write in template directive with base class like in example above: `v-mods-names:awesome`
