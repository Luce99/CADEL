const Inscripcion = require('../models/Inscripcion')
const userService = require('./user')
const projectService = require('./Project')


createInscripcion = async(inscripcion) =>{
    let inscripcionInstance = new Inscripcion(inscripcion)
    created_inscripcion = await inscripcionInstance.save()
    await userService.updateInscripcion(inscripcion['estudiante'], created_inscripcion['_id'])
    await projectService.updateInscripcion(inscripcion['projects'], created_inscripcion['_id'])
    return created_inscripcion
}

getInscripcion = async() => {
    let inscripcion = await Inscripcion.find({})
    return inscripcion
}

getInscripcionById = async(inscripcionId)=>{
    let inscripcion = await Inscripcion.findById(inscripcionId).exec()
    return inscripcion
}

deleteInscripcion = async(inscripcionId, inscripcion, callback)=>{
    let inscripciond = Inscripcion.findByIdAndDelete(inscripcionId, inscripcion, callback, {new: true})
    return inscripciond
}

updateInscripcion = async(inscripcionId, inscripcion)=>{
    let newInscripcion = await Inscripcion.findByIdAndUpdate(inscripcionId, inscripcion,{new:true})
    await userService.updateInscripcion(inscripcion['estudiante'], newInscripcion['_id'])
    await projectService.updateInscripcion(inscripcion['projects'], newInscripcion['_id'])
    return newInscripcion
}

module.exports = {
    createInscripcion,
    getInscripcion,
    getInscripcionById,
    deleteInscripcion,
    updateInscripcion
}