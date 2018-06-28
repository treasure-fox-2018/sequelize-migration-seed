'use strict';
const fs = require('fs')
const readFile = fs.readFileSync('./addresses.csv',"utf8").split('\n')
const addresses = []
for(var i = 0; i < readFile.length; i++){
    var split = readFile[i].split(',')
    var obj = {
        street:split[1],
        city:split[2],
        zip_code:split[3],
        createdAt: new Date,
        updatedAt: new Date
    }
    addresses.push(obj)
}

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
    return queryInterface.bulkInsert('Addresses', addresses, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
