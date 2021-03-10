const db = require('../database/models');

module.exports = {
    index : (req,res) => {
        db.Payment.findAll()
        .then(metodos => {
            res.render('index', {
                metodos
            })
        })
    },
    valores : (req,res)=>{
        const {montoOrigen,origen,destino} = req.body;
        let trans = db.Transaction.findOne({
            where : {
                source : origen,
                target : destino
            }
        })
        let metodos = db.Payment.findAll()
        Promise.all([trans, metodos])
        .then(([trans,metodos]) => {
            let comision = (montoOrigen * trans.perception) / 100;
            let montoDestino = montoOrigen - comision;
            res.render('index',{
                montoDestino,
                metodos,
                old : req.body
            })
        })
    }
}