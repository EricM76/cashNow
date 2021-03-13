'use strict';

const methods = [
  {
    name : 'transferencia bancaria',
    currency: 1,
    label: 'CBU de la cuenta',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name :'rapipago',
    currency : 1,
    label : 'alias',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'pagoFacil',
    currency : 1,
    label:'alias',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'cobroExpress',
    currency : 1,
    label: 'alias',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: 'mercadoPago',
    currency : 1,
    label: 'nombre de usuario de mercado pago',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'uala',
    currency : 1,
    label : 'nombre de usuario de uala',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'bitcoin',
    currency : 2,
    label : 'codigo de bitcoin',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'transfEuros',
    currency : 3,
    label: 'codigo bancario europeo',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'payPal',
    currency : 4,
    label: 'correo electronico de PayPal',
    createdAt : new Date,
    updatedAt : new Date
  }
  ]

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Payments',methods, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Payments', null, {});
     
  }
};
