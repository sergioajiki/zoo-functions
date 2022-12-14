const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// // console.log(employees)

const isManager = (id) => {
  // console.log(id)
  //   // retorna booleano
  //   // caminho employees.menagers
  //   // verifica se é gerente true or false usar some.
  return employees
    .some((gerente) =>
      // console.log(gerente,gerente.managers)  
      gerente.managers.includes(id)
    )
  // .filter((gerente) => 
  // console.log(gerente))
  //     .some((element) => element[0] === id || element[1] === id)
  //   // .some((element, index) => element[index] === id)

};

const getRelatedEmployees = (managerId) => {

  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!')
  }

  // console.log(employees)
  employees.forEach((gerente) => {
    console.log(gerente.managers)
    console.log(managerId)
    if (gerente.managers.includes(managerId)) {
      console.log('encontrou gerente')
    }
  }
  )

};
// // isManager(olaId)
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'))
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

// getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8')
// getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83')
// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')
// getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad')

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
