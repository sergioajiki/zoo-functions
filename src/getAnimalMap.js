const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// const locais = ['NE', 'NW', 'SE', 'SW']
// const animaisPorLocal = () => {
//   const result = {}
//   locais.forEach((local) => {
//     const animaisPorLocal = species.filter((specie) => local === specie.location)
//       // .map((anim) => ({ [local]: anim.name } ))
//       .map((anim) => anim.name)
//     result[local] = animaisPorLocal
//     // console.log(local,anim.name))
//     // ({ anim }))
//     // console.log
//     // console.log(result)
//     // console.log(teste)
//   })
//   return result
// }

const animalPorLocal = species.reduce(function (acumulador, animal) {
  if (!acumulador[animal.location]) {
    acumulador[animal.location] = [];
  }
  acumulador[animal.location].push(animal.name);
  return acumulador
}, {})

// const nomesDosAnimais = species.map((animal) => ({ [animal.name]: animal.residents.map((anim) => anim.name) }))
// console.log(nomesDosAnimais);

// console.log(options);
function allAnimalPorLocal(options) {
  console.log(options);
  const result = species.reduce(function (acumulador, animal) {
   let animalNomes = animal.residents.map((anim) => anim.name)
    if (options.sorted === true) animalNomes = animalNomes.sort()
    if (!acumulador[animal.location]) {
      acumulador[animal.location] = [];
    }
    acumulador[animal.location].push({ [animal.name]: animalNomes });
    return acumulador

  }, {})
  return result
}
// console.log(allAnimalPorLocal);

// const allAnimalPorLocalSex = species.reduce(function (acumulador, animal) {
//   if (!acumulador[animal.location]) {
//     acumulador[animal.location] = [];
//   }
//   acumulador[animal.location].push({ [animal.name]: animal.residents.map((anim) => anim.name) });
//   return acumulador
// }, {})




// construir o array de nomes
// usar o sort dentro de um if para ordenar
// usar o filter dentro de um if para separar por sex

// nome dos animais

// const localNamesNE = species.filter((animal) => animal.location === 'NE')
//   .map((element) => ({ [element.name]: element.residents.map((e) => e.name) }))
// const localNamesNW = species.filter((animal) => animal.location === 'NW')
//   .map((element) => ({ [element.name]: element.residents.map((e) => e.name) }))
// const localNamesSE = species.filter((animal) => animal.location === 'SE')
//   .map((element) => ({ [element.name]: element.residents.map((e) => e.name) }))
// const localNamesSW = species.filter((animal) => animal.location === 'SW')
//   .map((element) => ({ [element.name]: element.residents.map((e) => e.name) }))

// const localizacaoComNome = {
//   NE: localNamesNE,
//   NW: localNamesNW,
//   SE: localNamesSE,
//   SW: localNamesSW,
// }
// console.log(localizacaoComNome);



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

  // console.log(options)
  if (options === undefined) return animalPorLocal;
  if (!options.includeNames) return animalPorLocal;
  if (options.includeNames === true) return allAnimalPorLocal(options);
  //  } else {
  // return animaisPorLocal()
  //  } 

  // seu código aqui
  // caminho species.name species.location species.resident.name,sex
  // separar por local
  // console.log(localizacao)
  // return localizacao;  

};


// console.log(getAnimalMap());
console.log(getAnimalMap({ includeNames: true }));
console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));


module.exports = getAnimalMap;
