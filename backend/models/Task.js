const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  },

  status: {
    type: String,
    enum: ["pending", "in-progress", "done"],
    default: "pending"
  },

  deadline: Date
});

module.exports = mongoose.model("Task", taskSchema);