// const { getVersion } = require('jest');
const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function verificaFuncionario(parametro) {
  return employees
    .some((employee) => employee.firstName === parametro.name
      || employee.lastName === parametro.name
      || employee.id === parametro.id);
}

function idFuncionario(parametro) {
  let result = '';
  employees.find((employee) => {
    if (employee.firstName === parametro.name
      || employee.lastName === parametro.name
      || employee.id === parametro.id) {
      result = employee.id;
    }
    return result;
  });
  return result;
}

function nomeCompleto(id) {
  let fullName = '';
  employees.find((employee) => {
    if (employee.id === idFuncionario(id)) {
      fullName = `${employee.firstName} ${employee.lastName}`;
    }
    return fullName;
  });
  return fullName;
}

function responsavelPorAnimais(id) {
  let animais = [];
  employees.map((employee) => {
    if (employee.id === idFuncionario(id)) {
      animais = employee.responsibleFor;
    }
    return animais;
  });
  return animais;
}

function getAnimals(id) {
  const animal = [];
  const local = [];
  const animalAndLocal = {};
  species.forEach((specie) => {
    if (responsavelPorAnimais(id).includes(specie.id)) {
      animal.push(specie.name);
      local.push(specie.location);
    }
  });
  animalAndLocal.species = animal;
  animalAndLocal.locations = local;
  return animalAndLocal;
}

function infoFuncionario(id) {
  const info = { id };
  info.id = idFuncionario(id);
  info.fullName = nomeCompleto(id);
  Object.assign(info, getAnimals(id));
  return info;
}

const allFuncId = employees.map((employee) => ({ id: employee.id }));

function allFuncionarios() {
  const fullFunc = [];
  allFuncId.forEach((idFunc) => {
    fullFunc.push(infoFuncionario(idFunc));
  });
  return fullFunc;
}

const getEmployeesCoverage = (parametro) => {
  if (parametro === undefined) {
    return allFuncionarios();
  }
  if (verificaFuncionario(parametro) === false) throw new Error('Informações inválidas');

  return infoFuncionario(parametro);
};

module.exports = getEmployeesCoverage;
