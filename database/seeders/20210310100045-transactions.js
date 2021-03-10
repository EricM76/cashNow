'use strict';

let methods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let transactions = [];

for (let source = 0; source < methods.length; source++) {
  for (let target = 0; target < methods.length; target++) {
    var transaction = {
      source: methods[source],
      target: methods[target],
      perception: target * 2,
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
