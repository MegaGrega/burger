// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const burger = {
  getAll: cb => {
      orm.selectAll('burgers', cb);
  },
  addOne: (burgerObj, cb) => {
      orm.insertOne('burgers',burgerObj, cb);
  },
  updateOne: (changeObj,id, cb) => {
      orm.updateOne('burgers', changeObj,id,cb);
  }
}

// Export the database functions for the controller (catsController.js).
module.exports = burger;
