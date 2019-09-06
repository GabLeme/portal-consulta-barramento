const mongoose = require("mongoose");

const ErrorSchema = mongoose.Schema({
})

module.exports = mongoose.model("Error", ErrorSchema, "error");
