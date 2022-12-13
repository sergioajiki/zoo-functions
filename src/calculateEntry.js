const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const separaPorIdade = {
    child: 0,
    adult: 0,
    senior: 0,
  }
  const verParametro = entrants;
  if (verParametro === undefined || Object.entries(verParametro).length === 0) {
    return 0
  }
  const idadeVisitantes = verParametro
    .map((visitante) => visitante.age)
    .forEach((idade) => {
      if (idade < 18) {
        separaPorIdade.child += 1
      } else if (idade >= 50) {
        separaPorIdade.senior += 1
      } else {
        separaPorIdade.adult += 1
      }
    })
  return separaPorIdade
  // console.log(separaPorIdade)
  // console.log(idadeVisitantes);
};

const calculateEntry = (entrants) => {
  const verParametro = entrants;
  if (verParametro === undefined || Object.entries(verParametro).length === 0) {
    return 0
  }


  // seu código aqui
};

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
const visit = [
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 }
];


// console.log(countEntrants());
// console.log(countEntrants({}));
console.log(countEntrants(entrants));
console.log(countEntrants(visit))

module.exports = { calculateEntry, countEntrants };
