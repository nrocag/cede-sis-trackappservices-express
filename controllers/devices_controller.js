const devicesModel = require("../models/device_model")

exports.getAllDevices = (req, res) => {
    devicesModel.findAll({
        attributes: ["id", "name", "serie", "category", "stateDevice"]
    })
    .then(data => {
        console.log(data);
        res.json({ "message": "Get all devices from controller", "devices": data });
    })
    .catch(err => res.status(500).send({ "error": err.parent.sqlMessage }));
}

exports.getDeviceById = (req, res) => {
    res.json({ "message": `Get device by id ${req.params.id} from controller` });
}

exports.updateDevice = (req, res) => {
    res.json({ "message": "Update device from controller", "device for update": req.body });
}

exports.createDevice = (req, res) => {
    res.json({ "message": "Create device from controller", "device for create": req.body });
}

exports.deleteDevice = (req, res) => {
    res.json({ "message": `Delete device with id ${req.params.id} from controller` });
}