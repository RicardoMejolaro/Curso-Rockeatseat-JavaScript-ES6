"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//2º exercício
//A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1 Utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades); //2.2 Utilizando o filter
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18..
//..anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var verificaIdadeEmpresa = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(verificaIdadeEmpresa); //2.3 Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var buscaTabalhaNoGoogle = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
console.log(buscaTabalhaNoGoogle);
/*2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]*/

var multiplicaIdadefiltraIdade = usuarios.map(function (item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    idade: item.idade * 2
  });
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(multiplicaIdadefiltraIdade);
/***************Não consegui implementar sozinho, olhei a resolução, não tinha experiência com 
 * SPREAD rs, serviu de aprendizado, afinal curso é para isso, mas tentei 
 * bastante antes rs*********************************************************/
