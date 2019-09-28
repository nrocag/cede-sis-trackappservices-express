const devicesModel = require("../models/Mongo/devices_model_mongo")

exports.getAllDevices = async (req, res) => {
    try {
        const data = await devicesModel.find({});
        res.json({ "message": "Get all devices from mongo controller", "devices": data });
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

exports.getDeviceById = async (req, res) => {
    try {
        const data = await devicesModel.findOne({ id: req.params.id });
        res.json({ "message": `Get device by id ${req.params.id} from mongo controller`, "device": data });
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

exports.updateDevice = async (req, res) => {
    try {
        rowsUpdated = await devicesModel.update(
            { id: req.body.id },
            {
                name: req.body.name,
                description: req.body.description,
                serie: req.body.serie,
                category: req.body.category,
                stateDevice: req.body.stateDevice
            }, { multi: true });
        res.json({ "message": `Rows: ${rowsUpdated.ok}, Update device from mongo controller`, "device updated": req.body });
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

exports.createDevice = async (req, res) => {
    try {
        await devicesModel.create(
            {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                serie: req.body.serie,
                category: req.body.category,
                stateDevice: req.body.stateDevice
            });
        res.json({ "message": `Rows: 1, create device from mongo controller`, "device created": req.body });
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

exports.deleteDevice = async (req, res) => {
    try {
        await devicesModel.deleteOne({ id: req.params.id });
        res.json({ "message": `Delete device with id ${req.params.id} from mongo controller` });
    } catch (err) {
        res.status(500).send({ error: err })
    }
}