const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// console.log(employees);
// console.log(species)

const getOldestFromFirstSpecies = (id) => {
  // console.log(id)
  const primeiroAnimal = employees.find((colaborador) => colaborador.id === id).responsibleFor[0]
  // console.log(primeiroAnimal)

  // let AnimalMaisVelho = 0
  const selecionaAnimal = speciesgit.filter((selecionaAnimal) => selecionaAnimal.id === primeiroAnimal)
  let retornaAnimalMaisVelho = []
  const animalMaisVelho = selecionaAnimal.filter((animal) => {
    animal.residents
      .sort((ageA, ageB) => ageB.age - ageA.age)
    console.log(animal.residents[0].name)

    // retornaAnimalMaisVelho.push(`${animal.residents[0].name}, ${animal.residents[0].sex}, ${animal.residents[0].age}`)
    retornaAnimalMaisVelho.push(`${animal.residents[0].name}`)
    retornaAnimalMaisVelho.push(`${animal.residents[0].sex}`)
    retornaAnimalMaisVelho.push(animal.residents[0].age)
  })


  console.log(retornaAnimalMaisVelho)
  return retornaAnimalMaisVelho
  // 
  // console.log(selecionaAnimal)



  // console.log(selecionaAnimal.residents)
  // 
  // console.log(animalMaisVelho.residents);  
  // })



}

// });

//  verificaAnimal.age > idadeAnimalMaisVelho
//  idadeAnimalMaisVelho = verificaAnimal.age
//  console.log(idadeAnimalMaisVelho)
// console.log(primeiroAnimalCuidado);

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));