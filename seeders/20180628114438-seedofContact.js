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
    return queryInterface.bulkInsert('Contacts',[{
      name: 'Lani Rollins',
      email: 'blandit@quam.com',
      phoneType: '1-633-389-7173',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
        name: 'McKenzie Burris,',
        email: 'mauris.Morbi.non@nequeNullam.com',
        phoneType: '1-906-235-0832',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Amethyst Morgan',
        email: 'dui@magnis.ca',
        phoneType: '1-548-366-6273',
        createdAt: new Date(),
        updatedAt: new Date()


      }, {

        name: 'Lamar Hardin',
        email: 'pharetra.felis.eget@mattisInteger.com',
        phoneType: '1-519-693-8091',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Keegan Coleman',
        email: 'leo.Cras.vehicula@musProinvel.edu',
        phoneType: '1-998-626-8896',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});



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
