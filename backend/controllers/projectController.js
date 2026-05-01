const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Only admin can create project" });
    }

    const { title, description, team } = req.body;

    const project = new Project({
      title,
      description,
      team,
      createdBy: req.user.id
    });

    await project.save();

    res.status(201).json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error creating project" });
  }
};


exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [
        { createdBy: req.user.id },
        { team: req.user.id }
      ]
    });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching projects" });
  }
};