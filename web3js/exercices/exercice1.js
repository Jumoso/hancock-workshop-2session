var web3js = require('../../utils/ethereum');

var web3 = web3js.getWeb3();

// Exercice 1: create a basic account and print the response.

var account = web3.eth.accounts.create();

console.log(account);

process.exit();
