const projectService = require ("../services/Project")

const projectResolvers = {
    Query:{
        getProjects: async(parent, args)=> {
            let project = projectService.getProjects()
            return project
        },
        getProjectById: async(parent, args)=>{
            let project = projectService.getProjectById(args._id)
            return project
        }
    },
    Mutation:{
        createProject: async (parent, args) =>{
            let project = projectService.createProject(args)
            return project
        },
        updateProject: async (parent, args)=> {
            let project = projectService.updateProject(args._id,args)
            return project
        },
        deleteProject: async(parent, args) =>{
            let projectDelete = projectService.deleteProject(args._id, args)
            return projectDelete
        }
    }
}

module.exports = { projectResolvers}