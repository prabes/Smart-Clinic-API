const { Router } = require('express');
const patientRoutes = require('./patients.routes');
const doctorsRoutes = require('./doctors.routes');
const labAssistantRoutes = require('./lab_assistants.routes');

const apiRouter = Router();
apiRouter.use('/doctors', doctorsRoutes);
apiRouter.use('/patients', patientRoutes);
apiRouter.use('/lab_assistant', labAssistantRoutes);
module.exports = apiRouter