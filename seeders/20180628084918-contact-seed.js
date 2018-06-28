'use strict';
const fs = require('fs')
const readFile = fs.readFileSync('./contacts.csv',"utf8").split('\n')
const contacts = []
for(var i = 0; i < readFile.length; i++){
    var split = readFile[i].split(',')
    var obj = {
        name:split[1],
        email:split[2],
        phone:split[3],
        createdAt: new Date,
        updatedAt: new Date
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
    return queryInterface.bulkInsert('Contacts', contacts, {});
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
