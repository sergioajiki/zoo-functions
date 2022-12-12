// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(employees)
const isManager = (id) => {
  // retorna booleano
  // caminho employees.menagers
  // verifica se é gerente usar some.
  // console.log(id)
  //  return employees
  //  .map((employee) => employee.managers )
  // //  .some((element) => element == id)
  //  .some((element) => element[0] === id || element[1] === id )
};

const getRelatedEmployees = (managerId) => {
//   // seu código aqui
//   // employees.firstName
//   // employees.lastName
// const procuraGerente = employees
// .filter((gerente) => gerente.managers)
// .find((element) => console.log(element.managers ))
//  // [0] === managerId || gerente.managers[1] === managerId
// // console.log(procuraGerente)
// // return procuraGerente
// // .find((element) => element === managerId )

};
// isManager(olaId)
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'))
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

// getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8')
// getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83')
// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')
// getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad')

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
