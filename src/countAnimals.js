const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const paramRecebido = animal;
  const result = {};
  let count = 0;
  if (paramRecebido === undefined) {
    species.map((tipoAnimal) => {
      result[tipoAnimal.name] = tipoAnimal.residents.length;
      return result;
    });
    return result;
  }
  const procuraAni = species.find((specie) => specie.name === paramRecebido.species);
  if (paramRecebido.sex === 'male' || paramRecebido.sex === 'female') {
    count = procuraAni.residents.filter((resident) => resident.sex === paramRecebido.sex).length;
  } else {
    count = procuraAni.residents.length;
  }
  return count;
};

console.log(countAnimals());
console.log(countAnimals({ species: 'giraffes' }));
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
console.log(countAnimals({ species: 'giraffes', sex: 'male' }));
// countAnimals({ species: 'giraffes', sex: 'female' })

module.exports = countAnimals;
