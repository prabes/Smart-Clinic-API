const { Router } = require('express');
const controllers = require('../controllers/doctors.controllers.js');
const router = Router();

router.get('/', controllers.getAllDoctors);
router.post('/new', controllers.createDoctor);
module.exports = router;