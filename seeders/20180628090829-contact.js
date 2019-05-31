'use strict';
const fs = require('fs')
let allContacts = []
let dataContacts = fs.readFileSync(__dirname +'/../contacts.csv', 'utf8').split('\n')
dataContacts.forEach(function(contact){
  let file = contact.split(",")
  let obj = {
    name: file[1],
    email: file[2],
    phone: file[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  allContacts.push(obj)
})

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
   return queryInterface.bulkInsert('Contacts', allContacts, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
