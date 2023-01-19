const LabAssistant = require("../models/patient");

const createLabAssistant = async (req, res) => {
  try {
    const labAssistant = await LabAssistant.create({ ...req.body.data });
    return res.status(200).json({ labAssistant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLabAssistant
};