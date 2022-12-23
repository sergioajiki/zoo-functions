const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// localização dos animais
const localNE = species.filter((animal) => animal.location === 'NE').map((ani) => ani.name)
const localNW = species.filter((animal) => animal.location === 'NW').map((ani) => ani.name)
const localSE = species.filter((animal) => animal.location === 'SE').map((ani) => ani.name)
const localSW = species.filter((animal) => animal.location === 'SW').map((ani) => ani.name)
// console.log(localNE)
// console.log(localNW)
// console.log(localSE)
// console.log(localSW)
const localizacao = {
  NE: localNE,
  NW: localNW,
  SE: localSE,
  SW: localSW,
}
// nome dos animais

const localNamesNE = species.filter((animal) => animal.location === 'NE')
.map((element) => ({  [element.name]: element.residents.map((e) => e.name) }))
const localNamesNW = species.filter((animal) => animal.location === 'NW')
.map((element) => ({  [element.name]: element.residents.map((e) => e.name) }))
const localNamesSE = species.filter((animal) => animal.location === 'SE')
.map((element) => ({  [element.name]: element.residents.map((e) => e.name) }))
const localNamesSW = species.filter((animal) => animal.location === 'SW')
.map((element) => ({  [element.name]: element.residents.map((e) => e.name) }))

const localizacaoComNome = {
  NE: localNamesNE,
  NW: localNamesNW,
  SE: localNamesSE,
  SW: localNamesSW,
}




// console.log(localNamesNE);
// {
//   NE:[{specie: [nomes dos animais]}  ]
// }
//  o retorno é um objeto 
//  {
//   NE: [
//     { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//     { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
//   ],
//   NW: [
//     { tigers: ['Shu', 'Esther'] },
//     { bears: ['Hiram', 'Edwardo', 'Milan'] },
//     { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
//   ],
//   SE: [
//     { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
//     { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
//   ],
//   SW: [
//     { frogs: ['Cathey', 'Annice'] },
//     { snakes: ['Paulette', 'Bill'] },
//   ],
// };

const getAnimalMap = (options) => {
  console.log(options)
  if (options === undefined) return localizacao;
  if (options.includeNames === true) {
    return localizacaoComNome
   } else {
    return localizacao
   } 
  
  // seu código aqui
  // caminho species.name species.location species.resident.name,sex
  // separar por local
  // console.log(localizacao)
  // return localizacao;  

};

console.log(getAnimalMap());
console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));


module.exports = getAnimalMap;
