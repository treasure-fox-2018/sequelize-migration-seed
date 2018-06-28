'use strict';
const fs = require("fs")
let files = fs.readFileSync("./addresses.csv","utf8").split("\n")
let address = []
for(let i=0;i<files.length;i++){
  let file = files[i].split(',')
  let obj = {
    street : file[1],
    city : file[2],
    zip_code : file[3],
    createdAt : new Date(),
    updatedAt : new Date()
  }
  address.push(obj)
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
   return queryInterface.bulkInsert('Addresses',address,{})
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
