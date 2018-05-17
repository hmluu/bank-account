const accountModel = require('../models/account'); //

const index = (request, response) => {
  const accounts = accountModel.index();
  response.send(accounts);
}

const show = (request, response) => {
  const account = accountModel.show(request.params.id);
  response.send(account);
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
