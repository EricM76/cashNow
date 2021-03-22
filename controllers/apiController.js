const db = require('../database/models');


const round = (numero, decimales = 2) => {
   
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');
    if (numeroRegexp.test(numero)) {
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;
    }
}

module.exports = {
    getValor: (req, res) => {
        const { montoOrigen, origen, destino } = req.body;
        db.Transaction.findOne({
            where: {
                source: origen,
                target: destino
            }
        })
            .then(trans => {
                let comision = (montoOrigen * trans.perception) / 100;
                let montoDestino = round(montoOrigen - comision);
                res.json({
                    montoDestino,
                    percepcion : trans.perception
                })
            })
    },
    setValor:(req,res)=>{
        const{montoDestino, origen, destino} = req.body;
        db.Transaction.findOne({
            where: {
                source: origen,
                target: destino
            }
        })
            .then(trans => {
                let porcentaje = 100 - trans.perception;
                let montoOrigen = round(100 * montoDestino / porcentaje)
                res.json(
                    {
                        montoOrigen
                    })
            })
    }

}