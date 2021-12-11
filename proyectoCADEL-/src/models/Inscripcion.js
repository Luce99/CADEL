const mongoose = require('mongoose')
const Schema = mongoose.Schema
const project = require("./Project")
const user = require("./user")

const inscripcionSchema = new Schema({
    estadoInscripcion: {
        type: String,
        required: true
    },
    fechaIngreso: {
        type: Date,
        required: true
    },
    fechaEgreso : {
        type: Date,
        required: false
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    projects: {
        type: Schema.Types.ObjectId,
        ref: "project"
    }
})

module.exports = mongoose.model("inscripcion", inscripcionSchema)