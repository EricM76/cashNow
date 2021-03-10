'use strict';

const methods = [
  {
    name : 'transPesosArg',
    currency: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'cuentaDigital',
    currency : 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name :'rapipago',
    currency : 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'pagoFacil',
    currency : 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'cobroExpress',
    currency : 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: 'mercadoPago',
    currency : 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'uala',
    currency : 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'bitcoin',
    currency : 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'dai',
    currency : 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'tether',
    currency : 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'transfEuros',
    currency : 3,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'tranferWise',
    currency : 3,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'advCash',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'uphold',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'neteller',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'payPal',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'payEer',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'perfectMoney',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Skrill',
    currency : 4,
    createdAt : new Date,
    updatedAt : new Date
  },
  ]

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Payments',methods, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Payments', null, {});
     
  }
};
