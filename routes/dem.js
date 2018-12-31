var express = require('express');
var router = express.Router();
const ContratoDao = require('../routes/contrato-dao');

/* GET demandas listing. */
router.get('/', function(req, res, D) {
  
  new ContratoDao(global.connection)
  .list()
  .then(results => res.json(results))
  .catch(err => console.log(err))
});

module.exports = router;
