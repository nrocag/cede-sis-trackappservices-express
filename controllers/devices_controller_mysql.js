const devicesModel = require("../models/MySql/device_model_mysql")

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
    devicesModel.findOne({
        attributes: ["id", "name", "serie", "category", "stateDevice"],
        where: { id: req.params.id }
    })
        .then(data => {
            console.log(data);
            res.json({ "message": `Get device by id ${req.params.id} from controller`, "devices": data });
        })
        .catch(err => res.status(500).send({ "error": err.parent.sqlMessage }));
}

exports.updateDevice = (req, res) => {
    devicesModel.update(
        {
            name: req.body.name,
            description: req.body.description,
            serie: req.body.serie,  
            category: req.body.category,
            stateDevice: req.body.stateDevice
        },
        {where: { id: req.body.id } }
    )
        .then(rowsUpdated => {
            res.json({ "message": `Rows: ${rowsUpdated}, Update device from controller`, "device for update": req.body });
        })
        .catch(err => res.status(500).send({ "error": err.parent.sqlMessage }));
}

exports.createDevice = (req, res) => {
    devicesModel.create(
        {
            name: req.body.name,
            description: req.body.description,
            serie: req.body.serie,  
            category: req.body.category,
            stateDevice: req.body.stateDevice
        }
    )
        .then(() => {
            res.json({ "message": `Rows: 1, Create device from controller`, "device for create": req.body });
        })
        .catch(err => res.status(500).send({ "error": err.parent.sqlMessage }));
}

exports.deleteDevice = (req, res) => {
    devicesModel.destroy({
        where: { id: req.params.id }
    })
        .then(() => {
            res.json({ "message": `Delete device with id ${req.params.id} from controller` });
        })
        .catch(err => res.status(500).send({ "error": err.parent.sqlMessage }));
}