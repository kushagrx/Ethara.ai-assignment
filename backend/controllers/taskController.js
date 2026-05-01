const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Only admin can assign tasks" });
    }

    const { title, description, assignedTo, projectId, deadline } = req.body;

    const task = new Task({
      title,
      description,
      assignedTo,
      projectId,
      deadline
    });

    await task.save();

    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error creating task" });
  }
};


exports.getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find();
    } else {
      tasks = await Task.find({ assignedTo: req.user.id });
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching tasks" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (task.assignedTo.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    task.status = req.body.status || task.status;

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: "Error updating task" });
  }
};