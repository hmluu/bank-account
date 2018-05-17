const transactionModel = require('../models/transaction'); //

const index = (request, response) => {
  const accountTransactions = transactionModel.index(request.params.account_id);
  response.send(accountTransactions);
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
