// const { getVersion } = require('jest');
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

function verificaFuncionario(parametro) {
  return employees
    .some((employee) => employee.firstName === parametro.name
      || employee.lastName === parametro.name
      || employee.id === parametro.id);
}

function idFuncionario(parametro) {
  // console.log(parametro)
  // if(verificaFuncionario(parametro) === false) throw new Error('Informações Inválidas');
  let result = '';
  // console.log(employees);
  employees.find((employee) => {
    // console.log(employee);
    if (employee.firstName === parametro.name
      || employee.lastName === parametro.name
      || employee.id === parametro.id) {
      result = employee.id;
    }
    return result;
  });
  // if (result === '') {
  //   throw new Error('Informações inválidas');
  // }
  return result;
}

function nomeCompleto(id) {
  // console.log(id)
  let fullName = '';
  employees.find((employee) => {
    if (employee.id === idFuncionario(id)) {
      fullName = `${employee.firstName} ${employee.lastName}`;
    }
    return fullName;
  });
  // console.log(fullName)
  return fullName;
}

function responsavelPorAnimais(id) {
  // console.log(id)
  let animais = [];
  employees.map((employee) => {
    if (employee.id === idFuncionario(id)) {
      animais = employee.responsibleFor;
      // return animais;
    }
    // console.log('teste',animais);
    return animais;
  });
  return animais;
}

function getAnimals(id) {
  const animal = [];
  const local = [];
  const animalAndLocal = {};
  // console.log(responsavelPorAnimais(parametro))
  species.forEach((specie) => {
    if (responsavelPorAnimais(id).includes(specie.id)) {
      // console.log(specie.id)
      animal.push(specie.name);
      local.push(specie.location);
    }
  });
  animalAndLocal.species = animal;
  animalAndLocal.locations = local;
  return animalAndLocal;
}

function infoFuncionario(id) {
  // console.log(id)
  const info = { id };
  // console.log(nomeCompleto(id))
  // console.log('teste', idFuncionario(id))
  info.id = idFuncionario(id);
  // console.log('teste', nomeCompleto(id))
  info.fullName = nomeCompleto(id);
  Object.assign(info, getAnimals(id));
  // console.log(info)
  return info;
}

const allFuncId = employees.map((employee) => ({ id: employee.id }));
// console.log(allFuncId)

function allFuncionarios() {
  const fullFunc = [];
  allFuncId.forEach((idFunc) => {
    // console.log(idFunc)
    // fullFunc = infoFuncionario(idFunc)
    fullFunc.push(infoFuncionario(idFunc));
  });
  //  console.log(fullFunc)
  return fullFunc;
}

const getEmployeesCoverage = (parametro) => {
  if (parametro === undefined) {
    return allFuncionarios();
  }
  // console.log(idFuncionario(parametro))
  if (verificaFuncionario(parametro) === false) throw new Error('Informações inválidas');

  return infoFuncionario(parametro);
  // console.log(verificaFuncionario(parametro))
  // return getAnimals(parametro)
  // return responsavelPorAnimais(parametro)
  // return nomeCompleto(parametro)
  // return idFuncionario(parametro)
};
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sergio' }));
module.exports = getEmployeesCoverage;
