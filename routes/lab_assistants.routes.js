const { Router } = require('express');
const controllers = require('../controllers/lab_assistant.controllers');
const router = Router();

router.post('/new', controllers.createLabAssistant);
router.post('/login', controllers.checkloggedInAssistant);
module.exports = router;