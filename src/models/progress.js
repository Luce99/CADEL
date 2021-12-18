const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = require('./user')
const project = require('./project')

const ProgressSchema = new Schema({
  idProject: {
    type: Schema.Types.ObjectId,
    ref: "project"
  },
  idStudent:{
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  advanceDate:{
    type: Date,
    required: true
  },
  advanceDescription: {
    type: String,
    required: true
  },
  leaderObservation: {
    type: String,
    required: true
  }
})

// Exportar
module.exports = mongoose.model("progress", ProgressSchema)