const Skill = require("../models/Skills");

exports.getSkills = async (re, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ messege: "Error fetching skills", error });
  }
};

exports.addSkill = async (req, res) => {
  const { name } = req.body;
  try {
    const skill = new Skill({ name });
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: "Error adding skill", error });
  }
};

exports.updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );
  } catch {}
};
