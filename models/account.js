const fs = require('fs');
const path = require('path');
const accountsPath = path.join(__dirname, '..', 'data', 'accounts.json');
const uuidv1 = require('uuid/v1');
const index = () => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  return accounts;
}

const show = (id) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const foundAccount = accounts.find( account => account.id === id);
  return foundAccount;
}
const create = ({accountHolder, bankName, description}) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const newAccount = {
    accountHolder,
    bankName,
    description,
    id: uuidv1()
    }

    accounts.push(newAccount);
    accountsJSONstring = JSON.stringify(accounts);
    fs.writeFileSync(accountsPath, accountsJSONstring);
    return newAccount;

}

const update = (id, {bankName, accountHolder, description}) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  let newUpdatedAccount;
  const updatedAccounts = accounts.map(account => {
    if (account.id === id) {
      newUpdatedAccount = {
        id,
        bankName: bankName || account.bankName,
        accountHolder: accountHolder || account.accountHolder,
        description: description || account.description
      };
      return newUpdatedAccount;
    } else {
      return account;
    }
  })
  accountsJSONstring = JSON.stringify(accounts);
  fs.writeFileSync(accountsPath, accountsJSONstring);
  return newUpdatedAccount;
};


const destroy = (id) => {
  let matchedID;
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const newArrayAccounts = accounts.filter( account => {
    if (account.id === id) {
      matchedID = account;
      return false;
    } else {
      return true;
    }
  });
  newArrayAccountsJSON = JSON.stringify(newArrayAccounts);
  fs.writeFileSync(accountsPath, newArrayAccountsJSON);
  return matchedID;

}






module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
