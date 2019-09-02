const express = require('express');
const bodyParser = require('body-parser');
const port = 8000 || process.env.PORT;
const app = express();
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.dev, { useNewUrlParser: true })
    .then(() => {
        console.log("Conexão com DB realizada com sucesso");
    })
    .catch((err) => {
        console.log("Não foi possível se conectar ao DB.");
        throw err;
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/commonservices.route')(app);

app.listen(port, () => {
    console.log("Server rodando na porta:", port)
})
