const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions');

router.get('/accounts/:account_id/transactions', transactionsController.index);
// router.get('/accounts/:id', accountsController.show);
router.post('/accounts/:account_id/transactions', transactionsController.create);
// router.put('/accounts/:id', accountsController.update);
// router.delete('/accounts/:id', accountsController.destroy); //no need to add books after / because of index.js

module.exports = router;
