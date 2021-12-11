const inscripcionService = require ("../services/Inscripcion")

const inscripcionResolvers = {
    Query:{
        getInscripcion: async(parent, args)=> {
            let inscripcion = inscripcionService.getInscripcion()
            return inscripcion
        },
        getInscripcionById: async(parent, args)=>{
            let inscripcion = inscripcionService.getInscripcionById(args._id)
            return inscripcion
        }
    },
    Mutation:{
        createInscripcion: async (parent, args) =>{
            let inscripcion = inscripcionService.createInscripcion(args)
            return inscripcion
        },
        updateInscripcion: async (parent, args)=> {
            let inscripcion = inscripcionService.updateInscripcion(args._id,args)
            return inscripcion
        },
        deleteInscripcion: async(parent, args) =>{
            let inscripcionDelete = inscripcionService.deleteInscripcion(args._id, args)
            return inscripcionDelete
        }
    }
}

module.exports = { inscripcionResolvers}