const inscriptionService = require('../services/inscription')

const inscriptionResolvers = {
  Query:{
    getInscription: async(parent,args) =>{
      let inscriptions = await inscriptionService.getInscription()
      return inscriptions
    },
    getInscriptionById: async(parent,args) =>{
      let inscription = inscriptionService.getInscriptionById(args._id)
      return inscription
    }
  },
  Mutation:{
    createInscription: async(parent,args) =>{
      let inscription = inscriptionService.createInscription(args)
      return inscription
    },
    updateInscription: async(parent,args) =>{
      let inscriptionUpdate = inscriptionService.updateInscription(args._id, args)
      return inscriptionUpdate
    },
    deleteInscription: async(parent,args) =>{
      let inscriptionDelete = inscriptionService.deleteInscription(args._id, args)
      return inscriptionDelete
    }
  }
}

// Exportar
module.exports = {
  inscriptionResolvers
}