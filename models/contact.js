'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here //
      }
    }
  });
  return Contact;
};
