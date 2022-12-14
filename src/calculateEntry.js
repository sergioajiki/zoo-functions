const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const separaPorIdade = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  const verParametro = entrants;
  verParametro
    .map((visitante) => visitante.age)
    .forEach((idade) => {
      if (idade < 18) {
        separaPorIdade.child += 1;
      } else if (idade >= 50) {
        separaPorIdade.senior += 1;
      } else {
        separaPorIdade.adult += 1;
      }
    });
  return separaPorIdade;
};

const calculateEntry = (entrants) => {
  const verParametro = entrants;
  if (verParametro === undefined || Object.entries(verParametro).length === 0) {
    return 0;
  }
  const pagantes = countEntrants(entrants);
  // console.log(pagantes);
  // console.log(prices);
  let total = 0;
  Object.keys(pagantes)
    .forEach((chave) => {
      console.log(pagantes[chave]);
      console.log(prices[chave]);
      total += pagantes[chave] * prices[chave];
    });
  return total;
};

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// const visit = [
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 }
// ];

// console.log(countEntrants());
// console.log(countEntrants({}));
// console.log(countEntrants(entrants));
// console.log(countEntrants(visit))
// console.log(calculateEntry())
// console.log(calculateEntry(entrants))
// console.log(calculateEntry(visit))
// console.log(calculateEntry([{ name: 'Maria Costa', age: 18 }]))
// console.log(calculateEntry([{ name: 'Lara Carvalho', age: 5 }, { name: 'Carlos Nogueira', age: 50 }
// ]))

module.exports = { calculateEntry, countEntrants };
