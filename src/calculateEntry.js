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
// for (let price in Object.keys(prices)) {
//   if (chave === price) {
//     total += pagantes[chave * Object.values(prices)[price]]
//   } console.log(chave, price)
// }

// if(pagante === Object.keys(prices)) {
// // console.log(pagante, pagantes[pagante], Object.keys(prices)[index],Object.values(prices)[index])
// total += pagantes[pagante] * Object.values(prices)[index]
// console.log(total)
// }

// console.log(pagante, pagantes[pagante])
// console.log(Object.keys(prices)[index])
// console.log(Object.values(prices)[index])
// console.log(Object.values(prices)[index])
// console.log(pagantes[pagante])
// console.log(Object.values(pagantes), Object.values(prices)[index])
// })
// for (let index = 0; index < Object.entries(pagantes).length; index += 1) {
//   // console.log(Object.keys(pagantes)[index])
//   for (let i = 0; i < Object.keys(prices).length; i += 1) {
//     if (Object.keys(pagantes)[index] === Object.keys(prices)[i]) {
//       total += (Object.values(pagantes)[index] * Object.values(prices)[i]);
//     }
//   }
// } return total;
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
