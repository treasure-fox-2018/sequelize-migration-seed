'use strict';
let fs = require('fs')
let datas = fs.readFileSync('./addresses.csv', 'utf8').split('\n')

let data = []
for (let i = 0; i < datas.length; i++) {
  let fill = datas[i].split(',')
  let obj = {
    street: fill[1],
    city: fill[2],
    zip_code: fill[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  data.push(obj)
}



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', data, {});
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
