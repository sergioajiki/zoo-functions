const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function diaDisponivelAnimal(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

function horaFuncionamento(scheduleTarget) {
  for (const key in hours) {
    if (key === scheduleTarget) {
      return `Open from ${hours[key].open}am until ${hours[key].close}pm`;
      //   console.log(key)
      //   console.log(hours[key])
      //   console.log(hours[key].open)
      //   console.log(Object.values(hours[key]))
      // }
    }
  }
}

function verificaDia(scheduleTarget) {
  const exhibitionList = [];
  let result = {};
  species.forEach((animal) => {
    if (animal.availability.includes(scheduleTarget)) {
      exhibitionList.push(animal.name);
      result[scheduleTarget] = {};
      result[scheduleTarget].exhibition = exhibitionList;
      result[scheduleTarget].officeHour = horaFuncionamento(scheduleTarget);
    } else if (scheduleTarget === 'Monday') {
      result = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    }
  });
  return result;
}

const getSchedule = (scheduleTarget) => {
  // console.log(scheduleTarget)
  // retorna um array com o dias da semana no formato[ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ]
  // caminho species.availability
  // parametros verificados nome:animal, diaSemana, '',qualquercoisa
  // if(scheduleTarget === undefined)
  // retorna toda a agenda
  // if(scheduleTarget === qualquerCoisa)
  // retorna toda a agenda

  if (species.some((specie) => specie.name === scheduleTarget)) {
    console.log(species.name);
    return diaDisponivelAnimal(scheduleTarget);
  }
  // return horaFuncionamento(scheduleTarget)
  return verificaDia(scheduleTarget);
};
//   const exhibition = []
//   const result = {}
//   const agendaDoDia = species.forEach((animal) => {
//     if (animal.availability.includes(scheduleTarget)) {
//       exhibition.push(animal.name)
//       result[scheduleTarget] = {}
//       result[scheduleTarget].exhibition = exhibition
//       result[scheduleTarget].officeHour = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`
//       result[scheduleTarget].officeHour = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`
//     }
//   });
// console.log(result)
// return result
// return dias

// return result

// console.log(exhibition);
// console.log(result)
// getSchedule('Tuesday')
// console.log(getSchedule('lions'))
console.log(getSchedule('Monday'));
console.log(getSchedule('Tuesday'));
console.log(getSchedule('Thursday'));
console.log(getSchedule('lions'));
console.log(getSchedule('penguins'));

// {
//   'Tuesday': {
//     'officeHour': 'Open from 8am until 6pm',
//       'exhibition': ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
// },
// }

module.exports = getSchedule;
