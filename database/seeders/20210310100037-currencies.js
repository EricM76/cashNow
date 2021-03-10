'use strict';

const names = ['pesos','crypto','euro','dolar'];
const currencies = []

for (let index = 0; index < names.length; index++) {

  var currency = {
    name : names[index],
    createdAt : new Date,
    updatedAt : new Date
  }
  currencies.push(currency)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Currencies', currencies, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Currencies', null, {});

  }
     
};
