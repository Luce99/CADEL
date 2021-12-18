const mongoose = require('mongoose');
const Schema = mongoose.Schema
const user = require('./user');
const project = require('./project')

const InscriptionSchema = new Schema({
  idStudent:{
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  idProject: {
    type: Schema.Types.ObjectId,
    ref: "project"
  },
  state: {
    type: String,
    required: true
  },
  admitionDate: {
    type: Date,
    // required: true
  },
  egressDate: {
    type: Date,
    // required: true
  }
})

// Exportar
module.exports = mongoose.model("inscription",InscriptionSchema)