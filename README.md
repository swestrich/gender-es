# Gender-es

> Finds the gender of spanish nouns.

## Installation
```
$ npm install --save gender-es
```

## Usage

```js
var gender = require('gender-es');

gender.genderForNoun('carne');
// -> 'f'

gender.isFeminine('récord');
// -> false

gender.isMasculine('felicidad');
// -> false

gender.definiteArticle('calle');
// -> 'la'

gender.addDefiniteArticle('miel');
// -> 'la miel'

gender.indefiniteArticle('moto');
// -> una;

gender.addIndefiniteArticle('mapa',5); {
// -> 'unos mapa';


```

## API

### genderForNoun(str)

#### str

Type: `string`

Get the gender of the french noun.

### isMasculine(str)

#### str

Type: `string`

Is the french noun masculine?

### isFeminine(str)

#### str

Type: `string`

Is the french noun feminine?

### indefiniteArticle(str[,amount])

#### str

Type: `string`

Gets the indefinite article for the word (un,una,unos,unas).

### definiteArticle(str[,amount])

#### str

Type: `string`

Gets the definite article for the word (el,la,los,las).

### addIndefiniteArticle(str[,amount])

#### str

Type: `string`

Prefixes the indefinite article for the word (un,una,unos,unas) to the word.

### addDefiniteArticle(str[,amount])

#### str

Type: `string`

Prefixes the definite article for the word (el,la,los,las).