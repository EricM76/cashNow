var express = require('express');
var router = express.Router();

const {index} = require('../controllers/indexController');
const {getValor,setValor} = require('../controllers/apiController');


/* GET home page. */
router.get('/', index);
router.post('/apis/valorOrigen',getValor);
router.post('/apis/valorDestino',setValor)

module.exports = router;
