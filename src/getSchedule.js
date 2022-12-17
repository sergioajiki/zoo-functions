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
// Agenda da Semana
const semana = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
function agendaDaSemana() {
  for (let dia of semana) {
    const exhibitionList = [];
    let result = {};
    species.forEach((animal) => {
      if (animal.availability.includes(dia)) {
        exhibitionList.push(animal.name);
        result[dia] = {};
        result[dia].officeHour = horaFuncionamento(dia);
        result[dia].exhibition = exhibitionList;
      }
    })
    return result
  }

}

function verificaDia(scheduleTarget) {
  const exhibitionList = [];
  let result = {};
  species.forEach((animal) => {
    if (animal.availability.includes(scheduleTarget)) {
      exhibitionList.push(animal.name);
      result[scheduleTarget] = {};
      result[scheduleTarget].officeHour = horaFuncionamento(scheduleTarget);
      result[scheduleTarget].exhibition = exhibitionList;
    } else if (scheduleTarget === 'Monday') {
      result = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    } else {
      agendaDaSemana()
    }
  });
  return result;
}
// 'Tuesday': {
//   'officeHour': 'Open from 8am until 6pm',
//   'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
// },
const getSchedule = (scheduleTarget) => {
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
  // return agendaDaSemana();

};

// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Thursday'));
console.log(getSchedule('lions'));
console.log(getSchedule('penguins'));
// console.log(getSchedule('eeee'));

module.exports = getSchedule;
