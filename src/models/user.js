const mongoose = require('mongoose')
const Schema = mongoose.Schema
const project = require("./Project")

const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    identificacion : {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    tipoUsuario:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "project"
    }]
})

module.exports = mongoose.model("user", UserSchema)