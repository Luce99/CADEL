const mongoose = require('mongoose')
const Schema = mongoose.Schema
const project = require("./Project")
const user = require("./user")

const avancesSchema = new Schema({
    fechaAvance: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    observacionesLider : {
        type: String,
        required: true
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

module.exports = mongoose.model("avances", avancesSchema)