const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3005;
const accountsRoutes = require('./routes/accounts');

// const fs = require('fs');
// const path = require('path');

app.use(morgan('dev'));
app.use(express.json());
app.use('/', accountsRoutes);

app.get('/', (request, response) => {
  response.send('It works!');
});
// app.get('/accounts', (request, response) => {
//   fs.readFile(accountsPath, 'utf-8', (error, accountsJSON) =>{
//     if (error) {
//       console.error(error);
//       return response.sendStatus(500);
//     }
//     const accounts = JSON.parse(accountsJSON);
//     response.send(accounts);
//   })
// });

app.listen(PORT, () => {
  console.log(`bank-accounts: express application is listening on port number ${PORT}...`);
});
