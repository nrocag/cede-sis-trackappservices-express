var mongoose = require("mongoose");
var Schema = mongoose.Schema;
require("../../database/connectionMongoDb");

var devicesSchema = new Schema({
        //id: ObjectId,
        name: String,
        description: String,
        serie: String,
        category: Number,
        stateDevice: Boolean,
        id: Number
    });

var devicesmodel = mongoose.model("devices", devicesSchema);

module.exports = devicesmodel;