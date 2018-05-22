## Introduction

### Brièvement des méthodologies CSS

Lors de la mise au point de projets, nous devons souvent créer des composants, qui sont tous pareils, mais lorsqu'ils sont utilisés dans des endroits différents, ils ont des aspects différents ou de petites modifications. À cette fin, les développeurs utilisent souvent des méthodes de mise en page populaires, par exemple BEM, selon laquelle chaque bloc (dans notre cas, с’est un composant) a ses propres modifications, qui sont ajoutées par une nouvelle classe avec le même nom et le nom de modificateur  complémentaire. C’est illustré plus clairement par l'exemple ci-dessous.

<vuep template="#simpledemo"></vuep>
<script v-pre type="text/x-template" id="simpledemo">
<template>
  <div class="good">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Bon composant</div>
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

Nous devons utiliser ce composant ailleurs dans un jeu de couleurs différentes et sans un bouton avec plus. Selon la méthodologie, il faut ajouter un modificateur à cette classe du bloc principal afin de ne pas casser la conception du bloc lui-même, mais seulement changer les styles de sa modification. Voilà à quoi ça ressemble:

> Nous ajoutons une classe avec le modificateur cyan - `good_cyan`.
Souvent, vous pouvez rencontrer une variante quand ils utilisent `-` au lieu de `_`, et pour indiquer l'élément du bloc `--` plutôt que `__`. Mais ce sont des nuances. `vue-mods-names` vous permet d'utiliser n'importe quel caractère comme préfixe. Il les accepte comme les options de plug-in lors de l'installation. Aussi, je vous prie de noter que le nom des modificateurs en fonction de leur appartenance à une certaine page sur laquelle ils sont utilisés ou fonctionnels, mais pas de la couleur, est une bonne pratique.
Dans ce cas, le modificateur `cyan` a été utilisé pour plus de clarté.

<vuep template="#simpledemo2"></vuep>
<script v-pre type="text/x-template" id="simpledemo2">
<template>
  <div class="good good_cyan">
    <header class="good__header">Header</header>
    <div class="good__strip"></div>
    <div class="good__body">Bon composant</div>
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

Nous avons utilisé le même composant, mais nous avons indiqué une classe avec un modificateur et dans les styles de composant, nous avons simplement ajouté les styles pour cette modification de ce bloc:

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

Lors de l'utilisation de préprocesseurs, cela sera encore plus beau et compact:

``` css
.good_cyan .good__header,
.good_cyan .good__strip
  background-color: #00bcd4
  color: #000

.good_cyan .good__button
  display: none
```

Maintenant, imaginez à quel point il est bon de contrôler la conception d'un bloc particulier à l'aide de ces modificateurs.
Vous décrivez simplement les styles dont vous avez besoin dans un autre modificateur et vous les appliquez si nécessaire, vous pouvez appliquer un nombre différent de modificateurs.
Par exemple, dans le même bloc, ajoutez `.good_with-border` et `.good_red`.
Aussi, je tiens à vous rappeler que les blocs sont essentiellement appelés non pas en fonction de leur conception de couleur, mais en fonction de leur appartenance (contexte d'utilisation), par exemple, `.good_main-page` et `.good_article-page`.
Et à partir du nom, il devient immédiatement clair que ce bloc avec de tels styles est utilisé sur la page principale, mais le même bloc avec les styles modifiés est utilisé sur la page des articles.
La plupart des développeurs utilisent cette approche et ne le regrettent pas.
L'un des avantages importants de cette approche est la possibilité de se protéger des changements inutiles dans l'unité principale, de ne modifier que ses modifications.


### Composants dans Vue

Avec l'approche par composants, cette méthode de développement est très utile et elle devient très facile à utiliser.
Pour utiliser un composant avec d'autres modificateurs, vous devez autoriser le composant à adopter ces modificateurs par les propriétés d'entrée (props).
Voilà à quoi ressemble:

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

Maintenant, le composant peut accepter le modificateur de chaîne mods, qu'il va ajouter à la classe de composant principal et l'insérer dans l'attribut de classe.
Maintenant, vous pouvez utiliser votre composant dans les endroits différents, en s’arrogeant les propriétés de mods  diverses.
Les styles pour eux sont déjà décrits dans le composant lui-même.
Par exemple:

```js
// Utiliser un composant avec un modéle de couleur bleu
<MyComponent mods="cyan" />

// Utilise le composant avec le modéle de couleurs, qui est destiné à la page "contacts"
<MyComponent mods="contacts" />
```

Dans les styles de composants, nous ajoutons simplement la décoration du bloc avec le modificateur, c'est-à-dire `.my-component-name_contacts`.
C'est facile. **SI** vous n'utilisez pas de cascades dans votre mise en page, alors vos modificateurs fonctionneront comme prévu, ne cassez pas les autres éléments et l'unité principale.

> Sous les cascades, l'auteur comprend ce cas:  `div > .my-component-name > div:first-child` (par exemple, vous pouvez souvent le voir quand un tel design n'est même pas dans les styles du bloc lui-même).
Tout ne fonctionnera pas comme prévu, car il aborde le problème de la priorité d'appliquer des styles et les cascades est gagnée dans ce cas.
La même priorité a `id` et `!important`.
Et si vous l'avez indiqué à certains endroits, ne soyez pas surprise. Avec votre approche, rien ne vous sauvera. Dans un monde utopique où tout est bon, il est implicite que vous suivez toujours la méthodologie.
(Je tiens à noter que beaucoup de gens font vraiment tout bien et qu'il est alors très agréable de soutenir un projet entièrement écrit en accord avec cette approche.)

Mais notre composant écrit pour le moment n'est pas flexible. Pour lui donner la possibilité d'accepter plusieurs modificateurs, c'est à dire comme paramètre `mods` est une matrice de modificateurs, et pas seulement une chaîne, nous devons déjà retirer la ligne d'ajout de modificateurs dans le composant aux `computed properties` et gérer le cas s'il s'agit d'une matrice et s'il s'agit d'une chaîne. En fait, cela se fait très facilement:

`Pseudocode`
```js
// Si c'est une matrice (array)
if (mods is Array) {
  return mods.map(item => 'good' + '_' + item)
} else {
  return `good_${mods}`
}
```

Cependant, nous devons également tester l'existence d'une classe de base et la possibilité de passer un préfixe différent (beaucoup utilisent pour désigner les modificateurs `-` plutôt que `_`).En outre, si votre projet utilise cette approche qu’il avait la possibilité de passer des modificateurs à des blocs de composants de votre projet. Juste pour cela, vous serez bien avec le plugin `vue-mods-names`, ce qui simplifie grandement votre code et supprime toute cette fonctionnalité d'ajout de modificateurs de vos yeux.

> Je veux dire que le plugin est vraiment incroyablement léger et simple, il n'y a rien de compliqué dans le code.Un peu plus que dans l'exemple ci-dessus.
Par conséquent (`Contributions welcome`), la participation au projet est la bienvenue.
Nous l'avons pris pour ouvrir l'accès non pas parce que nous avons fait quelque chose d'ingénieux, mais parce que pour nous dans le "RG - Rossiyskaya Gazeta" cela aide dans le travail quotidien et nous espérons que vous appréciez. Encore une fois, si vous développez selon les méthodologies.

### Que des vue-mods-names utiles

**Avantages**
1. En utilisant le plugin, chaque composant de votre application obtient la possibilité d'accepter les modificateurs dans props: mods. (Vous n'avez plus besoin d'ajouter ce comportement à des composants individuels).
2. Votre code devient plus petit. Tout le travail avec des modificateurs est caché dans le plugin.
3. Dans n'importe quel composant, vous pouvez passer une chaîne de modification ou n'importe quel nombre de modificateurs dans la matrice.
4. Configuration de l'utilisation de la classe de base (voir la section `"utilisation avancée"`)

## Installation

Tout est comme d'habitude

```js
npm i vue-mods-names -D
```


## Utilisation

```js
import VueModsNames from 'vue-mods-names'

Vue.use(VueModsNames)
```

Si vous voulez changer le préfixe (par défaut: `_`), passez le simplement à l'option de plugin:

```js
import VueModsNames from 'vue-mods-names'

Vue.use(VueModsNames, { prefix: '-' })
```

Après cela, tout composant de votre application est prêt à utiliser des modificateurs si vous spécifiez le nom de la classe de base en tant qu'argument de la directive. Les exemples sont ci-dessous.

Nous déclarons le comportement en ajoutant une directive spéciale `v-mods-names` dans le template. `good` est le nom de la classe de base à laquelle les modificateurs seront attachés.

`Good.vue`
```html
<!-- Modèle du composant 'Bon', qui sera connecté dans les endroits différents: -->
<div v-mods-names:good>bien</div>
```

Maintenant, nous pouvons utiliser un composant avec les modificateurs différents:

`Page d'accueil`
```html
<Good mods="main" />
```

Par conséquent, vous obtenez un composant sur la page principale qui aura les classes de sortie suivantes:

```html
<div class="good good_main">bien</div>
```

> Toutes les modifications du composant sont spécifiées dans les styles du composant lui-même. Par exemple:

```css
.good {}

.good_main {}

.good_big {}
```

Maintenant, lorsque vous utilisez votre composant de cette façon:

```html
<Good :mods="['main', 'big']" />
```

À la sortie, nous obtenons ceci:

```html
<div class="good good_main good_big">bien</div>
```

## Utilisation avancée

### no-origin

Si vous deviez soudainement utiliser uniquement les noms de classes avec des modificateurs, sans une classe de base, alors le modificateur de la directive `v-mods-names` viendra à votre aide, qui est ajouté après le nom de votre classe de base:

`Awesome.vue`
```html
<!-- Modèle de composant Awesome -->
<div v-mods-names:awesome.no-origin>Шикарно</div>
```

Maintenant, lorsque vous utilisez votre composant de cette façon:

```html
<Awesome :mods="['main', 'big']" />
```

Vous recevrez ceci:


```html
<div class="awesome_main awesome_big"></div>
```

> Fonctionne de la même manière pour un modificateur sous la forme d'une chaîne, et pour une matrice de modificateurs

Personne ne vous empêche de l'utiliser de cette manière:

```html
<Awesome class="awesome" mods="big" />
```

À la fin , vous obtiendrez également votre classe de base spécifiée dans le modèle de composant lui-même et la classe générée avec le modificateur

```html
<div class="awesome awesome_big"></div>
```

> Cependant, cela n'a pas beaucoup de sens et il est beaucoup plus facile d'écrire une directive avec la classe de base dans le template comme dans l'exemple ci-dessus: `v-mods-names: awesome`

[KamilOcean](https://twitter.com/kamil_ocean)
