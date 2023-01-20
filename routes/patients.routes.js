const { Router } = require('express');
const { route } = require('express/lib/application');
const controllers = require('../controllers/patients.controllers');
const router = Router();

router.get('/', controllers.getAllPatients);
router.post('/new', controllers.createPatients);
router.post('/login', controllers.checkloggedInPatient)
module.exports = router;