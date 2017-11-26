# Введение

## Коротко о методологиях CSS

При разработке проектов нам часто приходится создавать компоненты, которые похожи друг на друга, но при использовании в разных местах имеют разный внешний вид или небольшие модфикации. Для этого разработчики часто используют распространённые методологии вёрстки, например БЭМ, согласно которой каждый блок (в нашем случае компонент) имеет свои модификации, которые добавляются новым классом с таким же именем и добавочным названием модификатора. Более наглядно это продемонстрировано на примере ниже.

<vuep template="#simpledemo"></vuep>
<script v-pre type="text/x-template" id="simpledemo">
<template>
  <div class="good">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Some text here...</div>
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

Нам нужно использовать этот компонент в другом месте в другой цветовой схеме и без кнопки с плюсиком. Согласно методологии нам нужно добавить модификатор к этому классу главного блока, чтобы не сломать оформление самого блока, а менять только стили его модификации. На практике это выглядит так:

> Добавляем класс с модфикатором cyan - `good_cyan`. Часто вы можете встретить вариант, когда используют `-` вместо `_`, а для обозначения элемента блока `--`, а не `__`. Но это уже нюансы. Так же прошу обратить ваше внимание, что хорошей практикой является наименования модификаторов в соответствии с их принадлежностью к определенной странице на которой он используется или функционалу, но не цветовому оформлению. В данном случае использовался модификатор `cyan` для большей гаглядности.

<vuep template="#simpledemo2"></vuep>
<script v-pre type="text/x-template" id="simpledemo2">
<template>
  <div class="good good_cyan">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Some text here...</div>
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

Мы использовали тот же компонент, но указали один класс с модификатором и в стилях компонента просто добавили стили для данной модификации этого блока:

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

При использовании препроцессоров это будет выглядить еще красивее и компактнее:

``` css
.good_cyan .good__header,
.good_cyan .good__strip
  background-color: #00bcd4
  color: #000

.good_cyan .good__button
  display: none
```

Теперь представьте как хорошо контролировать оформление определённого блока с помощью таких модификаторов. Вы просто описываете нужные вам стили в другом модификаторе и применяете их где нужно, можно применять разное количество модификаторов. Например, в один и тот же блок добавить `.good_with-border` и `.good_red`. Так же хочу ещё раз напомнить, что в основном блоки называют не в соответствии с их цветовым оформлением, а в соответствии с их принадлежностью (контекстом использования), например, `.good_main-page` и `.good_article-page`. И из названия сразу становится понятно, что этот блок с такими стилями используется на главной странице, но такой же блок с модифицированными стилями используется на странице статей. Большинство разработчиков используют такой подход и не жалеют об этом. Одно из важных приемуществ при данном подходе - это возможность оградить себя от ненужных изменений в основном блоке, менять только его модификации.

## Компоненты в вашем фрэймворке
