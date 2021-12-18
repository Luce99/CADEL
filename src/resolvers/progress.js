const progressService = require('../services/progress')

progressResolvers = {
  Query:{
    getProgress: async(parent,args) =>{
      let progress = progressService.getProgress()
      return progress
    },
    getProgressById: async(parent,args) =>{
      let progress = progressService.getProgressById(args._id)
      return progress
    }
  },
  Mutation:{
    createProgress: async(parent,args) =>{
      let progress = progressService.createProgress(args)
      return progress
    },
    updateProgress: async(parent,args) =>{
      let progressUpdate = progressService.updateProgress(args._id, args)
      return progressUpdate
    },
    deleteProgress: async(parent,args) =>{
      let progressDelete = progressService.deleteProgress(args._id, args)
      return progressDelete
    }
  }
}

// Exportar
module.exports = {
  progressResolvers
}