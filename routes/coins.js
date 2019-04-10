var express = require('express');
var router = express.Router();
var coinsController = require('../controllers/coinsController')

/* GET home page. */
router.get('/', coinsController.getAll);
router.get('/:id', coinsController.getOne);
router.post('/',coinsController.Create);
router.put('/:id',coinsController.Update);
router.delete('/:id',coinsController.Delete);

module.exports = router;
