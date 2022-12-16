const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function diaDisponivel(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

function verificaDia(scheduleTarget) {
  const exhibition = []
  const result = {}
  const agendaDoDia = species.forEach((animal) => {
    if (animal.availability.includes(scheduleTarget)) {
      exhibition.push(animal.name)
      result[scheduleTarget] = {}
      result[scheduleTarget].exhibition = exhibition
      result[scheduleTarget].officeHour = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`
      result[scheduleTarget].officeHour = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`
    }
  });

}

const getSchedule = (scheduleTarget) => {
  // console.log(scheduleTarget)
  // seu código aqui
  // retorna um array com o dias da semana no formato[ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ]
  //
  //caminho species.availability
  // parametros verificados nome:animal, diaSemana, '',qualquercoisa 
  // if(scheduleTarget === undefined)

  // retorna toda a agenda
  // if(scheduleTarget === qualquerCoisa)
  // retorna toda a agenda

  if (scheduleTarget === 'lions') {
    return diaDisponivel(scheduleTarget)
  }
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
}




// getSchedule('Tuesday')
console.log(getSchedule('lions'))
// {
//   'Tuesday': {
//     'officeHour': 'Open from 8am until 6pm',
//       'exhibition': ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
// },
// }


module.exports = getSchedule;
