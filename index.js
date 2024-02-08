const fs = require('fs');
const _ = require('lodash');

const loadDataWallet = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let dataWallet = loadDataWallet('data.txt');

const loadUserWallet = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let userWallet = loadUserWallet('wallets.txt');

JSON.stringify(userWallet)
JSON.stringify(dataWallet)


for (let i = 0; i < userWallet.length; i++) {
  for (let j = 0; j < dataWallet.length; j++) {
    if (_.isEqual(userWallet[i],dataWallet[j])) {
      console.log(`Eligable ${userWallet[i]}`); 
    }
  }
}