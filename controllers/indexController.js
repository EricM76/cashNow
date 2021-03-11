const { response } = require('express');
const db = require('../database/models');

module.exports = {
    index : (req,res) => {
        db.Payment.findAll()
        .then(metodos => {
            res.render('index', {
                metodos
            })
        })
    }
}