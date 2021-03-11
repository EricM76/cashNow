var express = require('express');
var router = express.Router();

const {index} = require('../controllers/indexController');
const {getValor} = require('../controllers/apiController');


/* GET home page. */
router.get('/', index);
router.post('/apis/valor',getValor);

module.exports = router;
