// trabajando en project.js de resolvers
const projectService = require('../services/project')

projectResolvers ={
  Query:{
    getProjects: async(parent, args) =>{
      let project = projectService.getProjects()
      return project
    },
    getProjectById: async(parent,args) =>{
      let project = projectService.getProjectById(args._id)
      return project
    }
  },
  Mutation:{
    createProject: async(parent, args) =>{
      let project = projectService.createProject(args)
      return project
    },
    updateProject: async(parent,args) =>{
      let projectUpdate = projectService.updateProject(args._id, args)
      return projectUpdate
    },
    deleteProject: async(parent,args) =>{
      let projectDelete = await projectService.deleteProject(args._id,args)
      return projectDelete
    }
  }
}

module.exports = {
  projectResolvers
}
