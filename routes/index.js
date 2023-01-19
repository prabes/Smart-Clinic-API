const { Router } = require('express');
const patientRoutes = require('./patients.routes');

const apiRouter = Router();
apiRouter.use('/doctors', doctorsRoutes);
apiRouter.use('/patients', patientRoutes )
module.exports = apiRouter