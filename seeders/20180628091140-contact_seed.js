'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
   const date = new Date()
    return queryInterface.bulkInsert('Contacts', [{
      name: 'Lani Rollins',
      email: 'blandit@quam.com',
      phone: '1-633-389-7173',
      createdAt: date,
      updatedAt: date
    }, {
      name: 'McKenzie Burris',
      email: 'mauris.Morbi.non@nequeNullam.com',
      phone: '1-906-235-0832',
      createdAt: date,
      updatedAt: date
    }, {
      name: 'Amethyst Morgan',
      email: 'dui@magnis.ca',
      phone: '1-548-366-6273',
      createdAt: date,
      updatedAt: date
    },{
      name: 'Lamar Hardin',
      email: 'pharetra.felis.eget@mattisInteger.com',
      phone: '1-519-693-8091',
      createdAt: date,
      updatedAt: date,
    }, {
      name: 'Keegan Coleman',
      email: 'leo.Cras.vehicula@musProinvel.edu',
      phone: '1-998-626-8896',
      createdAt: date,
      updatedAt: date,
    }], {});
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Contacts', null, {
       
     });
  }
};
