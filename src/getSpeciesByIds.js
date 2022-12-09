const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  // preciso id de species e retornar objetos
  // caminho id = data.species.id
  // return species.filter((specieById) => specieById.id === ids) 
  const multiplesIds = ids
  let especieEncontrada = []
  // console.log(multiplesIds);
  multiplesIds.forEach((element) => {
    especieEncontrada = species.filter((specieById) => specieById.id === element)
    // console.log(especieEncontrada);

  })
  return especieEncontrada
  // result.push(especieEncontrada)
  // console.log(result)


};
// getSpeciesByIds()
// getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
// getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// );


// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// )
// );


module.exports = getSpeciesByIds;
