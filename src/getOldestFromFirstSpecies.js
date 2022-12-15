const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// console.log(employees);
// console.log(species)

const getOldestFromFirstSpecies = (id) => {
  const primeiroAnimal = employees.find((colaborador) => colaborador.id === id).responsibleFor[0];
  const selectAnimal = species.filter((selectAni) => selectAni.id === primeiroAnimal);
  const retornaAnimalMaisVelho = [];
  selectAnimal
    .filter((animal) => {
      animal.residents
        .sort((ageA, ageB) => ageB.age - ageA.age);
      // console.log(animal.residents[0].name);
      retornaAnimalMaisVelho.push(`${animal.residents[0].name}`);
      retornaAnimalMaisVelho.push(`${animal.residents[0].sex}`);
      retornaAnimalMaisVelho.push(animal.residents[0].age);
      return retornaAnimalMaisVelho;
    });
  console.log(retornaAnimalMaisVelho);
  return retornaAnimalMaisVelho;
};
module.exports = getOldestFromFirstSpecies;

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
