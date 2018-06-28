'use strict';
let fs = require('fs')
let datas = fs.readFileSync('./contacts.csv', 'utf8').split('\n')

let data = []
for (let i = 0; i < datas.length; i++) {
  let fill = datas[i].split(',')
  let obj = {
    name: fill[1],
    email: fill[2],
    phone: fill[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  data.push(obj)
}



module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Contacts', data, {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

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
