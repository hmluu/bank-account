const transactionModel = require('../models/transaction'); //

const index = (request, response) => {
  const accountTransaction = transactionModel.index(request.params.account_id);
  response.send(accountTransaction);
}

const show = (request, response) => {
  const accountTransaction = transactionModel.show(request.params.transaction_id);
  response.send(accountTransaction); //show is only showing one transaction
}

const create = (request, response) => {
  const accountTransaction = transactionModel.create(request.params.account_id, request.body);
response.send(accountTransaction);
}

const update = (request, response) => {
  const accountTransaction = transactionModel.update(request.params.transaction_id, request.body);
  response.send(accountTransaction);
} //go back and fix variable

const destroy = (request, response) => {
  const accountTransaction = transactionModel.destroy(request.params.transaction_id);
  response.send(accountTransaction);
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
