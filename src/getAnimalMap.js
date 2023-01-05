const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const animalPorLocal = species.reduce((acc, animal) => {
  const acumulador = acc;
  if (!acumulador[animal.location]) {
    acumulador[animal.location] = [];
  }
  acumulador[animal.location].push(animal.name);
  return acumulador;
}, {});

function allAnimalPorLocal(options) {
  const result = species.reduce((acc, animal) => {
    const acumulador = acc;
    let animalNomes = animal.residents.map((anim) => anim.name);
    const animalNomeBySex = animal.residents.filter((anim) => {
      if (anim.sex === options.sex) {
        return anim.name;
      }
    }).map((nomeAnimal) => nomeAnimal.name);
    if (options.sex) animalNomes = animalNomeBySex;
    if (options.sorted === true) animalNomes = animalNomes.sort();
    if (!acumulador[animal.location]) {
      acumulador[animal.location] = [];
    }
    acumulador[animal.location].push({ [animal.name]: animalNomes });
    return acumulador;
  }, {});
  return result;
}

const getAnimalMap = (options) => {
  // console.log(options)
  if (options === undefined) return animalPorLocal;
  if (!options.includeNames) return animalPorLocal;
  if (options.includeNames === true) return allAnimalPorLocal(options);
};

// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
