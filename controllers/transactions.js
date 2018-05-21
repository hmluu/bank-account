const transactionModel = require('../models/transaction'); //

const index = (request, response) => {
  const accountTransactions = transactionModel.index();
  response.send(accountTransactions);
}

const show = (request, response) => {
  const accountTransaction = transactionModel.show(request.params.transaction_id);
  response.send(accountTransaction); //show is only showing one transaction
}

const create = (request, response) => {
  const accountTransactions = transactionModel.create(request.body);
}

const update = (request, response) => {
  const accountTransactions = transactiontModel.update(request.params.transaction_id, request.body);
} //go back and fix variable

const destroy = (request, response) => {
  const account = transactiontModel.destroy(request.params.transaction_id);
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
