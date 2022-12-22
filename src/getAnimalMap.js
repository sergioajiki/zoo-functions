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
console.log(localizacao)
// nome dos animais





const getAnimalMap = (options) => {
  if (options === undefined) return localizacao;

  // seu código aqui
  // caminho species.name species.location species.resident.name,sex
  // separar por local
  // console.log(localizacao)
  // return localizacao;  

};

getAnimalMap()
module.exports = getAnimalMap;
