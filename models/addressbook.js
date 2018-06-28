'use strict';
module.exports = (sequelize, DataTypes) => {
  var addressBook = sequelize.define('addressBook', {
    name: DataTypes.STRING
  }, {});
  addressBook.associate = function(models) {
    // associations can be defined here
  };
  return addressBook;
};