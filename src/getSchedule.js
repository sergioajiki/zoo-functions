const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function animalDisponivelNoDia(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}
const horarios = Object.entries(hours);
function horaFuncionamento(scheduleTarget) {
  let horarioFunc = '';
  horarios.forEach((key) => {
    if (key[0] === scheduleTarget) {
      horarioFunc = `Open from ${key[1].open}am until ${key[1].close}pm`;
    }
  });
  return horarioFunc;
}

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
      result = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    }
  });
  return result;
}

const semana = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
function agendaDaSemana() {
  const agendaSemana = {};
  semana.forEach((dia) => {
    Object.assign(agendaSemana, agendaDoDia(dia));
  });
  return agendaSemana;
}

function verificaDia(scheduleTarget) {
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
  return verificaDia(scheduleTarget);
};

// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Thursday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('penguins'));
// console.log(getSchedule('eeeee'));
// console.log(getSchedule());

module.exports = getSchedule;
