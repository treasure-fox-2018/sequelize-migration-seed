'use strict';
const fs = require('fs')

const contactsFile =  fs.readFileSync(__dirname + '/../contacts.csv', 'utf8');

const contacts = contactsFile.split('\n').reduce((result, data) => {
  if (data !== '') {
    const contact = data.split(',');
    result.push({
      name: contact[1],
      email: contact[2],
      phone: contact[3],
    });
  }
  return result;
}, []);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts',contacts, {})
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
