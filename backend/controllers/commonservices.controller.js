const Log = require("../models/log.model");
const Failure = require("../models/failure.model");
const moment = require("moment");
exports.findByCodigoTransacao = (req, res) => {

    if (req.query.codigoTransacao == null || req.query.method == null || req.query.collection == null)
        return res.status(500).send({ message: "Parametros incompletos " });

    const codigoTransacao = req.query.codigoTransacao;
    const apiMethod = req.query.method.toUpperCase();
    const collection = req.query.collection.toUpperCase();

    let Model = collection === 'LOG' ? Log : Failure;

    switch (apiMethod) {
        case 'GET':
            Model.find({ "serviceTrace.Parameters.codigoTransacao": codigoTransacao }, (err, log) => {
                if (err) res.status(500).send({ message: 'Nao foi possivel realizar a requisicao' })
                else res.send(log);
            })
            break;
        case 'POST':
            Model.find({ "data.codigoTransacao": codigoTransacao }, (err, log) => {
                if (err) res.status(500).send({ message: 'Nao foi possivel realizar a requisicao' })
                else res.send(log);
            })
            break;
    }

}

exports.findAllLogsToday = (req, res) => {

    if (req.query.operation == null)
        return res.status(500).send({ message: "Parametros incompletos " });

    const operation = req.query.operation;
    
    let today = moment().startOf('day').toISOString();
    let endOfToday = today.split('T')[0] + "T23:59:59.999";
    
    Log.find({ "log.dateTime": { "$gte": today, "$lte": endOfToday }, "serviceTrace.Operation": operation }, (err, logs) => {
        if(err) res.status(500).send({ message: "Nao foi possivel realizar a requisicao"})
        else res.send([{ totalMensagens: logs.length}])    
    })
}
