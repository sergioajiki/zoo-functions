const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // retorna um objeto
  // retorna objeto se firstname ou lastname
  // caminho employees.firstname
  // caminho employees.lastname
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((nomeemplyee) =>
      (nomeemplyee.firstName === employeeName
      || nomeemplyee.lastName === employeeName));
  // const firstOrLast = employees
  //   .find((nomeemplyee) =>
  //     (nomeemplyee.firstName === employeeName
  //     || nomeemplyee.lastName === employeeName));
  // return firstOrLast;
};
console.log(getEmployeeByName());
console.log(getEmployeeByName('Orloff'));
console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
