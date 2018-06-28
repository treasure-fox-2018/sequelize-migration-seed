'use strict';
module.exports = (sequelize, DataTypes) => {
  var Addres = sequelize.define('Addres', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Addres.associate = function(models) {
    // associations can be defined here
  };
  return Addres;
};