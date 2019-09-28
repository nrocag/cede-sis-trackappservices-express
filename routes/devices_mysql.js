var express = require('express');
var router = express.Router();
var controller = require("../controllers/devices_controller_mysql")

/* GET */
router.get('/', controller.getAllDevices);

/* GET by ID */
router.get('/:id', controller.getDeviceById);

/* POST */
router.post('/', controller.createDevice);

/* PUT */
router.put('/', controller.updateDevice);

  /* DELETE */
router.delete('/:id', controller.deleteDevice);

module.exports = router;
