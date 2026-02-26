const Skill = require('../models/Skill');

exports.addSkill = async (req, res) => {
  try {
    const { skillName, charges, experience, location, phone, description } = req.body;
    if (!skillName || !charges || !experience || !location || !phone) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const skill = await Skill.create({ skillName, charges, experience, location, phone, description, createdBy: req.user._id });
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const query = req.query.search
      ? { skillName: { $regex: req.query.search, $options: 'i' } }
      : {};
    const skills = await Skill.find(query).populate('createdBy', 'username email');
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};