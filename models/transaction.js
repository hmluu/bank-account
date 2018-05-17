const fs = require('fs');
const path = require('path');
const transactionsPath = path.join(__dirname, '..', 'data', 'transactions.json');

const index = (account_id) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const AllTransactions = JSON.parse(transactionsJSON);
  const accountTransactions = AllTransactions.filter(transaction => transaction.account_id === account_id);
  return accountTransactions; 
}

const show = () => {}
const create = () => {}
const update = () => {}
const destroy = () => {}






module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
