const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // idade do animal = species.residents.age
  // usar every para retornar true or false
  const selecionaAnimal = species.find((specie) => specie.name === animal);
  return selecionaAnimal.residents
    .every((elem) => elem.age >= age);
};
// console.log(getAnimalsOlderThan('penguins', 6));

module.exports = getAnimalsOlderThan;
