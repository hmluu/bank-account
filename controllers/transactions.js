const transactionModel = require('../models/transaction'); //

const index = (request, response) => {
  const accountTransactions = transactionModel.index();
  response.send(accountTransactions);
}

const show = (request, response) => {
  const accountTransactions = transactionModel.show(request.params.account_id);
  response.send(accountTransactions);
}

const create = (request, response) => {
  const accountTransactions = transactionModel.create(request.body);
}

const update = (request, response) => {
  const accountTransactions = accountModel.update(request.params.account_id, request.body);
}

const destroy = (request, response) => {
  const account = accountModel.destroy(request.params.account_id);
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
