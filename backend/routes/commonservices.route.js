module.exports = (app) => {
    const commonService = require("../controllers/commonservices.controller");
    
    app.get("/commonservices", commonService.findByCodigoTransacao);
}
