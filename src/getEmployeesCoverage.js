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

function procuraFuncionario(parametro) {
  const result = {}
  // console.log(funcionario.name)
  employees.find((employee) => {
    if (employee.firstName === parametro.name
      || employee.lastName === parametro.name
      || employee.id === parametro.id) {
        result.id = employee.id
        result.fullName = `${employee.firstName} ${employee.lastName}`;
        result.species = employee.responsibleFor
      // console.log(employee.firstName, employee.lastName)
      // console.log(employee.responsibleFor)
      // console.log(result);
    } else {
      throw new Error('Informações inválidas');
    }


  })
  return result 
}

const getEmployeesCoverage = (parametro) => {
    if (parametro === undefined){
      return 'colocar agenda completa'
    }
   return procuraFuncionario(parametro)


};
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({ name: 'sergio' }));
module.exports = getEmployeesCoverage;
