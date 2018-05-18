const accountModel = require('../models/account'); //

const index = (request, response) => {
  const accounts = accountModel.index();
  response.send(accounts);
}

const show = (request, response) => {
  const account = accountModel.show(request.params.id);
  response.send(account);
}
const create = (request, response) => {
  const account = accountModel.create(request.body);
  response.send(account);
}
const update = (request, response) => {
  const account = accountModel.update(request.params.id, request.body);
  response.send(account);
}
const destroy = (request, response) => {
  const account = accountModel.destroy(request.params.id);
  response.send(account);
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
/* ACCOUNTs:
[done] GET /accounts - index
[done] GET /accounts/:id - show
[ ] POST /accounts - create
[ ] PUT /accounts/:id - update
[ ] DELETE /accounts/:id - destroy
* Stretch: Only allow account deletion if account has zero transactions
TRANSACTIONS:
[done] GET /accounts/:account_id/transactions - transaction index for single account
[•] GET /transactions - (stretch) transaction index - all
[ ] GET /transactions/:transaction_id - transaction show - BUT include account holder in response
[ ] POST /accounts/:account_id/transactions - create transaction
[•] PUT /transactions/:transaction_id - (stretch)
[•] DELETE /transaction/:transaction_id - (stretch)
When you've completed the basic assignment, make sure you commit before continuing on the stretch!*/
