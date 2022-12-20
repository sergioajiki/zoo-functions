const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// {
//   id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
//   fullName: "Sharonda Spry", // nome completo: firstName + lastName
//   species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
//   locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }
// parametro nome, sobrenome , id, undefined, 
// undefined retorna todos os trabalhadores
// se não encontrada retorna throw new Error('Informações inválidas');

function idFuncionario(funcionario) {
  let result = ''
  employees.find((employee) => {
    if (employee.firstName === funcionario.name
      || employee.lastName === funcionario.name
      || employee.id === funcionario.id) {
      result = employee.id
    }
    //  else {
    //   console.log('teste')
    //   throw new Error('Informações inválidas');
    // }
  })
  return result;
};
// function nomeCompleto(parametro) {
//   let fullName = '';
//   employees.find((employee) => {
//     if (employee.id === idFuncionario(parametro)) {
//       fullName = `${employee.firstName} ${employee.lastName}`;
//     }
//   })
//   return fullName;
// };
function infoFuncionario(parametro) {
  let info = {}
  let fullName = '';
  employees.find((employee) => {
    if (employee.id === idFuncionario(parametro)) {
      fullName = `${employee.firstName} ${employee.lastName}`;
    }
  })
  info.id = idFuncionario(parametro)
  info.fullName = fullName
  Object.assign(info, getAnimals(parametro))

  return info;
};

function responsavelPorAnimais(parametro) {
  let animais = [];
  const animaisCuidados = employees.find((employee) => {
    if (employee.id === idFuncionario(parametro)) {
      animais = employee.responsibleFor
      // return animais;
    }
  })
  return animais
}
function getAnimals(parametro) {
  let animal = [];
  let local = [];
  let animalAndLocal = {};
  console.log(responsavelPorAnimais(parametro))
  species.forEach((specie) => {
    if (responsavelPorAnimais(parametro).includes(specie.id)) {
      // console.log(specie.id)
      animal.push(specie.name)
      local.push(specie.location)
    }
  })
  animalAndLocal.species = animal
  animalAndLocal.location = local
  return animalAndLocal
};
const getEmployeesCoverage = (parametro) => {

  if (parametro === undefined) {
    return 'colocar agenda completa'
  }
  // validaFuncionario(parametro)
  return infoFuncionario(parametro)
  // return getAnimals(parametro)
  // return responsavelPorAnimais(parametro)
  // return nomeCompleto(parametro)
  // return idFuncionario(parametro)
};
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage({ name: 'Spry' }));
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sergio' }));
module.exports = getEmployeesCoverage;
