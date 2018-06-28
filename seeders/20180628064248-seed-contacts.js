'use strict';
const fs = require('fs')
let files = fs.readFileSync(__dirname + '/../contacts.csv', 'utf8').split('\n');
let contacts = []
for (let i = 0; i < files.length; i++) {
  let file = files[i].split(',')
  let obj = {
    name: file[1],
    email: file[2],
    phone: file[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  contacts.push(obj)
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
   return queryInterface.bulkInsert('Contacts', contacts, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {})
  }
};
