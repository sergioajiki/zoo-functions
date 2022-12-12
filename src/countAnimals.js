const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // parametro recebe objeto
  // contar residents
  // caminho species.residents  species.residents.sex
  // formato retorno
  // { 
  //   lions: 4,
  // }
  let result = {}
  const paramRecebido = animal
  // console.log(paramRecebido);
  const key = paramRecebido.species
  // console.log(key)
  let count = 0
  const procuraAni = species.find((specie) => specie.name === paramRecebido.species)
  if (paramRecebido.sex === 'male' || paramRecebido.sex === 'female') {
    count = procuraAni.residents.filter((resident) => resident.sex === paramRecebido.sex).length
  } else {
    count = procuraAni.residents.length
  }
  // result[paramRecebido.species] = count
  // return result 
  return count
  // console.log(result)

}
console.log(countAnimals({ species: 'giraffes' }))
console.log(countAnimals({ species: 'giraffes', sex: 'female' }))
console.log(countAnimals({ species: 'giraffes', sex: 'male' }))
// countAnimals({ species: 'giraffes', sex: 'female' })




module.exports = countAnimals;
