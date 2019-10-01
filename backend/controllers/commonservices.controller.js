const LogModel = require("../models/log.model");
const FailureModel = require("../models/failure.model");
const ErrorModel = require("../models/error.model");
const moment = require("moment");
exports.findByCodigoTransacao = (req, res) => {

    if (req.query.codigoTransacao == null || req.query.method == null || req.query.collection == null)
        return res.status(500).send({ message: "Parametros incompletos " });

    const codigoTransacao = req.query.codigoTransacao;
    const apiMethod = req.query.method.toUpperCase();
    const collection = req.query.collection.toUpperCase();

    let Model = (
        collection === 'LOG' ? LogModel :
            collection === 'ERROR' ? ErrorModel :
                FailureModel
    );

    switch (apiMethod) {
        case 'GET':
            Model.find({ "serviceTrace.Parameters.codigoTransacao": codigoTransacao }, (err, log) => {
                if (err) res.status(500).send({ message: 'Nao foi possivel realizar a requisicao' })
                else res.send(log);
            })
            break;
        case 'POST':
            Model.find({ "data.codigoTransacao": codigoTransacao }, (err, log) => {
                console.log(log)
                if (err) res.status(500).send({ message: 'Nao foi possivel realizar a requisicao' })
                else res.send(log);
            })
            break;
    }

}

exports.findAllLogsToday = (req, res) => {

    if (req.query.operation == null /*|| req.query.empresaOperadora == null*/)
        return res.status(500).send({ message: "Parametros incompletos " });

    const operation = req.query.operation;
    const empresaOperadora = req.query.empresaOperadora;

    let today = moment().startOf('day').toISOString();
    let endOfToday = today.split('T')[0] + "T23:59:59.999";
    let operadora = (
        empresaOperadora === '98' ? 'cemar' : 'celpa'
    );

    // if (operation == 'postWebhook') {
    //     LogModel.find({ "log.dateTime": { "$gte": today, "$lte": endOfToday }, "serviceTrace.Operation": operation, "serviceTrace.Parameters.operadora": operadora }, (err, logs) => {
    //         if (err) res.status(500).send({ message: "Nao foi possivel realizar a requisicao" })
    //         else res.send([{ totalMensagens: logs.length }])
    //     })
    // }
    // else {
    LogModel.find({ "log.dateTime": { "$gte": today, "$lte": endOfToday }, "serviceTrace.Operation": operation /*, "serviceTrace.Parameters.empresaOperadora": empresaOperadora */}, (err, logs) => {
        if (err) res.status(500).send({ message: "Nao foi possivel realizar a requisicao" })
        else res.send([{ totalMensagens: logs.length }])
    })
}


