const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => {
  // retorna booleano
  // caminho employees.menagers
  // verifica se é gerente usar some.
  // console.log(id)
   return employees
   .map((employee) => employee.managers )
   .some((element) => element[0] === id || element[1] === id )
    console.log(verificaGerente);

    // const verificaGerente2 = employees
    // .filter((employee) => employee.managers )
    // console.log(verificaGerente2);
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};
isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8')
isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')
isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad')
module.exports = { isManager, getRelatedEmployees };
