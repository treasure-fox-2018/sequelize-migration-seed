'use strict';

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
   const date = new Date()
    return queryInterface.bulkInsert('Addresses', [{
      city: 'Mississippi',
      zip_code: '96522',
      createdAt: date,
      updatedAt: date,
      street: '711-2880 Nulla St',
    }, {
      city: 'Nebraska',
      zip_code: '20620',
      createdAt: date,
      updatedAt: date,
      street: '8562 Fusce Rd',
    }, {
      city: 'Roseville',
      zip_code: '11523',
      createdAt: date,
      updatedAt: date,
      street: '606-3727 Ullamcorper Street',
    }, {
      city: 'New York',
      zip_code: '39531',
      createdAt: date,
      updatedAt: date,
      street: '867-859 Sit Rd',
    }, {
      city: 'San Antonio',
      zip_code: '47096',
      createdAt: date,
      updatedAt: date,
      street: '7292 Dictum Av',
    }, {
      city: 'Tamuning',
      zip_code: '10855',
      createdAt: date,
      updatedAt: date,
      street: '651-8679 Sodales Av',
    }, {
      city: 'Corona New Mexico',
      zip_code: '08219',
      createdAt: date,
      updatedAt: date,
      street: '191-103 Integer Rd',
    }, {
      city: 'Muskegon KY',
      zip_code: '12482',
      createdAt: date,
      updatedAt: date,
      street: '2508 Dolor. Av',
    }, {
      city: 'Ohio',
      zip_code: '19253',
      createdAt: date,
      updatedAt: date,
      street: '666-4366 Lacinia Avenue',
    }, {
      city: 'San Bernardino',
      zip_code: '09289',
      createdAt: date,
      updatedAt: date,
      street: 'Lacinia Road',
    }, ], {});
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
