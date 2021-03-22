'use strict';
const faker = require('faker');

let methods = [1, 2, 3, 4, 5, 6, 7];

let transactions = [];

for (let source = 0; source < methods.length; source++) {
  for (let target = 0; target < methods.length; target++) {
    var transaction = {
      source: methods[source],
      target: methods[target],
      perception: faker.random.float({min:10,max:40}),
      createdAt : new Date,
      updatedAt : new Date
    }
    transactions.push(transaction)
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Transactions',transactions, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Transactions', null, {});
     
  }
};
