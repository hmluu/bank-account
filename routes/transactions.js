const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions');

router.get('/accounts/:account_id/transactions', transactionsController.index);
router.get('/transactions/:transaction_id', transactionsController.show);
router.post('/accounts/:account_id/transactions', transactionsController.create);
router.put('/transactions/:transaction_id', transactionsController.update);
router.delete('transactions/:transaction_id', transactionsController.destroy); //no need to add books after / because of index.js

module.exports = router;
