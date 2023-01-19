const Doctor = require("../models/doctor");

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    return res.json({doctors});
  } catch (e) {
    console.log("Error while fetching Doctor List");
    return res.status(500).json({ error: e.message });
  }
};

const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create({ ...req.body.data });
    return res.status(200).json({ doctor });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDoctors,
  createDoctor
};