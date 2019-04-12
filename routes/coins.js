var express = require('express');
var router = express.Router();
var coinsController = require('../controllers/coinsController')

/* GET home page. */


router.get('/', coinsController.getAll);

router.get('/id/:id', coinsController.getOne);
router.get('/name/:name',coinsController.getByName);
router.get('/country/:country',coinsController.getByCountry);
router.get('/available/:isAvailable',coinsController.getAvailable);
router.get('/year/:year',coinsController.getByYear);
router.post('/',coinsController.Create);
router.put('/:id',coinsController.Update);
router.delete('/:id',coinsController.Delete);



module.exports = router;
