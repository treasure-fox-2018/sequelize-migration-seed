'use strict';
const fs = require('fs')

const addressesFile = fs.readFileSync(__dirname + '/../addresses.csv', 'utf8');

const addresses = addressesFile.split('\n').reduce((result,data)=>{
    if(data != ''){
        const address = data.split(', ')
        result.push({
            street: address[1],
            city: address[2],
            zip_code: address[3],
        })
    }
    return result
}, [])

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Addresses', addresses, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {})
  }
};
