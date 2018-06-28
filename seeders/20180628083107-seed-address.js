'use strict';
const fs = require('fs')
let files = fs.readFileSync(__dirname + '/../addresses.csv', 'utf8').split('\n');
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
    return queryInterface.bulkInsert('Addresses', addresses, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {})
  }
};
