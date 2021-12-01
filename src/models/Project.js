const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require("./user")


const projectSchema = new Schema ({
    nombre:{
        type: String,
        required: true
    },
    objetivosGenerales:{
        type: String,
        required: true
    },
    objetivosEspecificos:{
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaTerminacion: {
        type: Date,
        required: true
    },
    estadoProyecto: {
        type: String,
        required: true
    },
    faseProyecto:{
        type: String,
        required: true
    },
    presupuesto: {
        type: Number,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("project",projectSchema)