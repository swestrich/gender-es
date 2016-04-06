'use strict';

function contains(a, obj) {
  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

module.exports.genderForNoun = function(str) {

  //info can be found here http://www.spanishdict.com/topics/show/1

  //If it ends in -o, -e, an accented vowel (á, é, í, ó, ú), -ma, or a consonant other than -d, -z, or ión, it's masculine.


  var last_letter = str[str.length - 1], // Last letter of str
    last_2_letters = str.slice(-2), // Last 3 letters of str
    last_3_letters = str.slice(-3);

  var isMasculine = false;

  if (last_2_letters === 'ma') return 'm';

  if (last_3_letters === 'ión' || last_3_letters === 'zón') {
    var exeptions = ['corazón', 'sentención', 'notición', 'roción', 'ansión'];
    if (exeptions.indexOf(str) > -1) {
      return 'm';
    }
    else {
      return 'f';
    }
  }

  switch (last_letter) {
    case 'o':
    case 'e':
    case 'á':
    case 'é':
    case 'í':
    case 'ó':
    case 'ú':
      {
        var exeptions = ['foto', 'llave', 'fe', 'mano', 'calle', 'moto', 'fiebre', 'libido', 'carne', 'radio', 'frase', 'polio', 'gente', 'virago', 'nieve', 'noche', 'nube', 'sangre', 'suerte', 'tarde', 'muerte', 'madre', 'base', 'clase', 'clave', 'corriente', 'fuente', 'llave', 'sede', 'serpiente', 'torre'];
        if (exeptions.indexOf(str) > -1) {
          return 'f';
        }
        else {
          return 'm';
        }
      }
  }

  switch (last_letter) { //a,d,z are feminin
    case 'a':
      {
        var exeptions = ['panda', 'buda', 'día', 'planeta', 'mapa', 'estratega'];
        if (exeptions.indexOf(str) > -1) {
          return 'f';
        }
        else {
          return 'm';
        }
      }
    case 'd':
      {
        var exeptions = ['huésped', 'ataúd', 'abad', 'alud', 'áspid', 'laúd', 'récord', 'milord', 'césped'];
        if (exeptions.indexOf(str) > -1) {
          return 'f';
        }
        else {
          return 'm';
        }
      }
    case 'z':
      {
        var exeptions = ['aprendiz', 'cáliz', 'arroz', 'pez', 'lápiz', 'ajedrez', 'antifaz', 'maíz', 'albornoz', 'avestruz', 'altavoz', 'altramuz', 'arroz', 'barniz', 'cariz', 'disfraz', 'haz', 'matiz'];
        if (exeptions.indexOf(str) > -1) {
          return 'f';
        }
        else {
          return 'm';
        }
      }

  }

  //the rest are masculine except

  var exeptions = ['miel', 'sal', 'hiel', 'piel', 'coliflor', 'sor', 'labor', 'flor'];
  if (exeptions.indexOf(str) > -1) {
    return 'f';
  }
  else {
    return 'm';
  }

};

module.exports.isMasculine = function(str) {
  return this.genderForNoun(str) === 'm';
};

module.exports.isFeminine = function(str) {
  return this.genderForNoun(str) === 'f';
};

module.exports.indefiniteArticle = function(str, amount) {
  if (amount === undefined || amount === 1) {
    return this.isFeminine(str) ? 'una' : 'un';
  } else {
    return this.isFeminine(str) ? 'unas' : 'unos';
  }
};

module.exports.addIndefiniteArticle = function(str,amount) {
  return this.indefiniteArticle(str,amount) + ' ' + str;
};

module.exports.definiteArticle = function(str, amount) {
  if (amount === undefined || amount === 1) {
    return this.isFeminine(str) ? 'la' : 'el';
  } else {
    return this.isFeminine(str) ? 'las' : 'los';
  }
};

module.exports.addDefiniteArticle = function(str,amount) {
  return this.definiteArticle(str,amount) + ' ' + str;
};