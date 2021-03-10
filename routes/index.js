var express = require('express');
var router = express.Router();

const {index, valores} = require('../controllers/indexController');


/* GET home page. */
router.get('/', index);
router.post('/apis/valores',valores)

module.exports = router;
