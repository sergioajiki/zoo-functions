const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  // preciso id de species e retornar objetos
  // caminho id = data.species.id
  const multiplesIds = ids;
  const result = [];
  multiplesIds.forEach((element) => {
    const especieEncontrada = species.find((specieById) => specieById.id === element);
    result.push(especieEncontrada);
  });
  return result;
};

module.exports = getSpeciesByIds;
