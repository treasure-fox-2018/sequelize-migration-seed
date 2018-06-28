'use strict';

const fs = require('fs')
const dataContact = fs.readFileSync('./contacts.csv', 'utf8').split('\n')
let tempContact = []

for(let i = 0; i < dataContact.length-1; i++) {
  let splitData = dataContact[i].split(',')
  let obj = {
    id: splitData[0],
    name: splitData[1],
    email: splitData[2],
    phone: splitData[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }

  tempContact.push(obj)

}

// console.log(tempContact)


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

    return queryInterface.bulkInsert('Contacts', tempContact, {})

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
