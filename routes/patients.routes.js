const { Router } = require('express');
const controllers = require('../controllers/patients.controllers');
const router = Router();

router.get('/', controllers.getAllPatients);
router.post('/new', controllers.createPatients);
module.exports = router;