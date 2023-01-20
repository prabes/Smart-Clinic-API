const LabAssistant = require("../models/lab_assistant");

const checkloggedInAssistant = async (req, resp) => {
  const { body } = req;
  let loggedInStatus
  if (body.phone && body.password) {
    const labAssistant = await LabAssistant.findAll({
      where: {
        phone_number: body.phone,
        password: body.password
      }
    }).then(res => {
        loggedInStatus = res.length ? true : false
    });
    return resp.status(200).json({ ...labAssistant, loggedInStatus })
  }
  return res.status(404).json({message: 'Not enought data!'})
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