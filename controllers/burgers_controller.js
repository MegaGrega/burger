var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', (req, res) => {
  burger.getAll(result => {
      res.render('index', {burger: result})
  })
});

router.post('/api/add', (req, res) => {
  burger.addOne(req.body, result => {
      res.json({id: result.insertId})
  });
});

router.put('/api/update/:id', (req,res) => {
  burger.updateOne(req.body, req.params.id, result => {
      if (result.affectedRows == 0) {
          return res.status(404).end();
      }
      res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
