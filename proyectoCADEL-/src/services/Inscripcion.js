const Inscripcion = require('../models/Inscripcion')
const userService = require('./user')
const projectService = require('./Project')
const fechaHora = new Date();

createInscripcion = async(args) =>{
    let inscripcionInstance = new Inscripcion({
        estadoInscripcion: 'Pendiente',
        fechaIngreso: fechaHora.getTime(),
        estudiante: args.estudiante,
        projects: args.projects
    })
    created_inscripcion = await inscripcionInstance.save()
    await userService.updateInscripcion(args['estudiante'], created_inscripcion['_id'])
    await projectService.updateInscripcion(args['projects'], created_inscripcion['_id'])
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

updateInscripcion = async(inscripcionId, args)=>{
    let newInscripcion = await Inscripcion.findByIdAndUpdate(inscripcionId, args,{new:true})
    await userService.updateInscripcion(args['estudiante'], newInscripcion['_id'])
    await projectService.updateInscripcion(args['projects'], newInscripcion['_id'])
    return newInscripcion
}

module.exports = {
    createInscripcion,
    getInscripcion,
    getInscripcionById,
    deleteInscripcion,
    updateInscripcion
}