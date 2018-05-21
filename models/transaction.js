const fs = require('fs');
const path = require('path');
const transactionsPath = path.join(__dirname, '..', 'data', 'transactions.json');
const uuidv1 = require('uuid/v1');
const accountsPath = path.join(__dirname, '..', 'data', 'accounts.json');

const index = (account_id) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const AllTransactions = JSON.parse(transactionsJSON);
  const accountTransactions = AllTransactions.filter(transaction => transaction.account_id === account_id);
  return accountTransactions;
}

const show = (id) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const allTransactions = JSON.parse(transactionsJSON);
  const foundTransaction = allTransactions.find( transaction => transaction.id === id );
console.log(foundTransaction);
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const foundAccount = accounts.find( account => account.id === foundTransaction.account_id);
  foundTransaction.accountHolder = foundAccount.accountHolder
  return foundTransaction;
}
const create = ({account_id, title, amount, pending}) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const allTransactions = JSON.parse(transactionsJSON);
  const newTransaction = {
    account_id,
    title,
    amount: parseFloat(amount),
    pending: Boolean(pending),
    id: uuidv1()
  }
  allTransactions.push(newTransaction);
  transactionsJSONstring = JSON.stringify(allTransactions);
  fs.writeFileSync(transactionsPath, transactionsJSONstring);
  return newTransaction;
}

const update = (id, {account_id, title, amount, pending}) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const allTransactions = JSON.parse(transactionsJSON);
  let newUpdatedTransaction;
  let updatedPending;
  const updatedTransactions = transaction.map( transaction => {
    if (transaction.id === id) {
      if (pending === 'undefined') {
        updatedPending = transaction.pending
      } else {
        updatedPending = Boolean(pending)
      }
      newUpdatedTransaction = {
        id,
        account_id: account_id || transaction.account_id,
        title: title || transaction.title,
        amount: parseFloat(amount) || transaction.amount,
        pending: updatedPending

      };
      return newUpdatedTransaction;
    } else {
      return transaction;
    }
  })
   transactionsJSONstring = JSON.stringify(allTransactions);
   fs.writeFileSync(transactionsPath, transactionsJSONstring);
   return newUpdatedAccount;
};

const destroy = (id) => {
  let matchedTransactionID;
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const allTransactions = JSON.parse(transactionsJSON);
  const newArrayTransactions = allTransactions.filter( transaction => {
    if (transaction_id === id) {
      matchedTransactionID = transaction;
      return false;
    } else {
      return true;
    }
  });
  newArrayTransactionsJSON = JSON.stringify(newArrayTransactions);
  fs.writeFileSync(transactionsPath, newArrayAccountsJSON);
  return matchedTransactionID;
}






module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
