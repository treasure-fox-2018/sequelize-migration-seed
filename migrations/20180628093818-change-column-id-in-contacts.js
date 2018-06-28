'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Contacts', 'id', {}),
      queryInterface.addColumn('Contacts', 'id', {
        // type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,        
      })
    ]
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return [
      queryInterface.removeColumn("Contacts", 'id'),
      queryInterface.addColumn("Contacts", 'id', {
        // type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: false,
        autoIncrement: true,        
      })
    ]
  }
};
