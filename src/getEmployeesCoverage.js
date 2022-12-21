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

function idFuncionario(parametro) {
  // console.log(parametro)
  let result = ''
  employees.find((employee) => {
    if (employee.firstName === parametro.name
      || employee.lastName === parametro.name
      || employee.id === parametro.id) {
      result = employee.id
    }
  })
  // console.log(result)
  return result;
};

function nomeCompleto(id) {
  // console.log(id)
  let fullName = '';
  employees.find((employee) => {
    if (employee.id === idFuncionario(id)) {
      fullName = `${employee.firstName} ${employee.lastName}`;
    }
  })
  // console.log(fullName)
  return fullName
};

function responsavelPorAnimais(id) {
  // console.log(id)
  let animais = [];
  const animaisCuidados = employees.find((employee) => {
    if (employee.id === idFuncionario(id)) {
      animais = employee.responsibleFor;
      // return animais;
    }
  })
  return animais
};

function getAnimals(id) {
  let animal = [];
  let local = [];
  let animalAndLocal = {};
  // console.log(responsavelPorAnimais(parametro))
  species.forEach((specie) => {
    if (responsavelPorAnimais(id).includes(specie.id)) {
      // console.log(specie.id)
      animal.push(specie.name);
      local.push(specie.location);
    }
  })
  animalAndLocal.species = animal;
  animalAndLocal.locations = local;
  return animalAndLocal;
};

function infoFuncionario(id) {
  // console.log(id)
  let info = {};
  // console.log(nomeCompleto(id))
  info.id = idFuncionario(id)
  info.fullName = nomeCompleto(id)
  Object.assign(info, getAnimals(id))
  // console.log(info)
  return info;
}

const allFuncId = employees.map(employee => ( { id: employee.id }));
  // console.log(allFuncId)

function allFuncionarios() {
  let fullFunc = [];
  allFuncId.forEach((idFunc) => {
    // console.log(idFunc)
    // fullFunc = infoFuncionario(idFunc)
    fullFunc.push(infoFuncionario(idFunc));
     
    })
//  console.log(fullFunc)
return fullFunc
};

const getEmployeesCoverage = (parametro) => {

  if (parametro === undefined) {
     return allFuncionarios()
  }
  // validaFuncionario(parametro)
  return infoFuncionario(parametro)
  // return getAnimals(parametro)
  // return responsavelPorAnimais(parametro)
  // return nomeCompleto(parametro)
  // return idFuncionario(parametro)
};
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sergio' }));
module.exports = getEmployeesCoverage;

