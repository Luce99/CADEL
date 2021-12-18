// Doc trabajado en Project.js
const mongoose = require('mongoose');
const progress = require('./progress');
const Schema= mongoose.Schema
const user = require('./user');

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  generalObject: {
    type: String,
    required: true
  },
  specificObject: {
    type: String,
    required: true
  },
  budget: { // Presupuesto
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: "user" // Toca importar la colección User
  },
  projectState:{
    type: String,
    required: true
  },
  phase: {
    type: String,
    required: true
  },
  progress: [{
    type: Schema.Types.ObjectId,
    ref: "progress"
  }],  
})

// exportando la info
module.exports = mongoose.model("project", ProjectSchema)
