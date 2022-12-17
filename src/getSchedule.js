const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function animalDisponivelNoDia(scheduleTarget) {
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

function agendaDoDia(diaSemana) {
  const exhibitionList = [];
  let result = {};
  species.forEach((animal) => {
    if (animal.availability.includes(diaSemana)) {
      result[diaSemana] = {};
      exhibitionList.push(animal.name);
      result[diaSemana].officeHour = horaFuncionamento(diaSemana);
      result[diaSemana].exhibition = exhibitionList;
    } else if (diaSemana === 'Monday') {
      // let result = {};
      result = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
      // return result
    }
  });
  // console.log(result)
  return result;
}
const semana = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
function agendaDaSemana() {
  const agendaSemana = {};
  for (const dia of semana) {
    Object.assign(agendaSemana, agendaDoDia(dia));
    // console.log(result)
  }
  //  console.log(agendaSemana);
  return agendaSemana;
}

function verificaDia(scheduleTarget) {
  // const exhibitionList = [];
  let resposta = {};
  species.forEach((animal) => {
    if (animal.availability.includes(scheduleTarget)) {
      resposta = agendaDoDia(scheduleTarget);
    } else if (scheduleTarget === 'Monday') {
      resposta = agendaDoDia('Monday');
    } else if (scheduleTarget === undefined) {
      resposta = agendaDaSemana();
    } else {
      resposta = agendaDaSemana();
    }
  });
  return resposta;
}

const getSchedule = (scheduleTarget) => {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return animalDisponivelNoDia(scheduleTarget);
  }
  // return horaFuncionamento(scheduleTarget)
  return verificaDia(scheduleTarget);
  // return agendaDoDia(scheduleTarget);
  // return agendaDaSemana();
};

// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Thursday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('penguins'));
// console.log(getSchedule('eeeee'));
// console.log(getSchedule());

module.exports = getSchedule;
