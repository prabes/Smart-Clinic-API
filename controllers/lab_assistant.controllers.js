const LabAssistant = require("../models/patient");

const checkloggedInAssistant = async (req, res) => {
  const { body } = req;
  if (body.phone && body.password) {
    const labAssistant = await LabAssistant.findAll({
      where: {
        phone: body.phone,
        password: body.password
      }
    });
    return res.status(200).json({labAssistant})
  }
  return res.status(404).json({message: 'LabAssistant Not logged In'})
}

const createLabAssistant = async (req, res) => {
  try {
    const labAssistant = await LabAssistant.create({ ...req.body.data });
    return res.status(200).json({ labAssistant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLabAssistant,
  checkloggedInAssistant,
};