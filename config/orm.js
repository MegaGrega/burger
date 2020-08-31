// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
  selectAll:function(table, cb){
      connection.query('SELECT * FROM ' + table + ';', (err, result) => {
          if (err) throw err
          cb(result);
      });
  },
  insertOne:function(table,rowObj, cb){
      connection.query('INSERT INTO ' + table + ' SET ?;',rowObj, (err, result) => {
          if (err) throw err;
          cb(result);
      })
  },
  updateOne: function (table, updateObj, id, cb){
      connection.query('UPDATE '+ table +' SET ? WHERE id= ?;', [updateObj, id], (err, result) =>{
          if (err) throw err;
          cb(result);
      })
  }
}

// Export the orm object for the model (cat.js).
module.exports = orm;
