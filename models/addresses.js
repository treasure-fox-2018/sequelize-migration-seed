'use strict';
module.exports = (sequelize, DataTypes) => {
  var Adresses = sequelize.define('Adresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Adresses.associate = function(models) {
    // associations can be defined here
  };
  return Adresses;
};