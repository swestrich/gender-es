'use strict';

var gender = require('./');


var test = require('unit.js');

test.assert(gender.genderForNoun('carne') === 'f');
test.assert(gender.genderForNoun('piel') === 'f');
test.assert(gender.indefiniteArticle('moto') === 'una');
test.assert(gender.definiteArticle('virago') === 'la');