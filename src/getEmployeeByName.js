const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((nomeemplyee) =>
      (nomeemplyee.firstName === employeeName
      || nomeemplyee.lastName === employeeName));
};

module.exports = getEmployeeByName;
