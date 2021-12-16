const avancesService = require ("../services/Avance")
const avancesResolvers = {

    Query:{
        getAvances: async(parent, args)=> {
            let avance = avancesService.getAvances()
            return avance
        },
        getAvancesById: async(parent, args)=>{
            let avances = avancesService.getAvancesById(args._id)
            return avances
        }
    },
    Mutation:{
        createAvances: async (parent, args) =>{
            let avances = avancesService.createAvances(args)
            return avances
        },
        updateAvances: async (parent, args)=> {
            let avances = avancesService.updateAvances(args._id,args)
            return avances
        },
        deleteAvances: async(parent, args) =>{
            let avancesDelete = avancesService.deleteAvances(args._id, args)
            return avancesDelete
        }
    }
}

module.exports = { avancesResolvers}