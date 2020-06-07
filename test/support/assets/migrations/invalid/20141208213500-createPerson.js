'use strict';

var Bluebird  = require('bluebird');

module.exports = {
  up: function (db) {
    return Bluebird
      .delay(1)
      .then(function () {
        return db.sequelize.query('INVALID QUERY');
      });
  }
};
