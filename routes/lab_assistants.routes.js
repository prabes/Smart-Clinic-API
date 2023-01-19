const { Router } = require('express');
const controllers = require('../controllers/lab_assistant.controllers');
const router = Router();

router.post('/new', controllers.createLabAssistant);
module.exports = router;