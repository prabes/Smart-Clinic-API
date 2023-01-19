const Patient = require("../models/patient");

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    return res.json({patients});
  } catch (e) {
    console.log("Error while fetching Doctor List");
    return res.status(500).json({ error: e.message });
  }
};

const createPatients = async (req, res) => {
  try {
    const patient = await Patient.create({ ...req.body.data });
    return res.status(200).json({ patient });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPatients,
  createPatients
};