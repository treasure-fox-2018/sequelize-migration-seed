'use strict';

const fs = require('fs')
const dataAddress = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
let tempAddresses = []

for(let i = 0; i < dataAddress.length-1; i++) {
  let splitData = dataAddress[i].split(',')
  let obj = {
    id: splitData[0],
    street: splitData[1],
    city: splitData[2],
    zip_code: splitData[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }

  tempAddresses.push(obj)
}

// console.log(tempAddresses)

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Addresses', tempAddresses, {})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
