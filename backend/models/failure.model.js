const mongoose = require("mongoose");

const FailureSchema = mongoose.Schema({
})

module.exports = mongoose.model("Failure", FailureSchema, "failure");
