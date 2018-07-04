'use strict';

const fs = require("fs")
let files = fs.readFileSync(__dirname + '/../addresses.csv','utf8').split('\n')
let addresses = []
for (let i = 0; i < files.length; i++) {
  let file = files[i].split(',')
  let obj = {
    street: file[1],
    city: file[2],
    zip_code: file[3],
    createdAt: new Date(),
    updatedAt: new Date()
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
   return queryInterface.bulkInsert('Addresses',addresses,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Addresses', null, {})
  }

};
