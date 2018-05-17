const fs = require('fs');
const path = require('path');
const accountsPath = path.join(__dirname, '..', 'data', 'accounts.json');

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
const create = (request, response) => {}
const update = (request, response) => {}
const destroy = (request, response) => {}






module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
