const Project = require('../models/Project')
const userService = require('./user')

createProject = async(project) =>{
    let projectInstance = new Project(project)
    created_project = await projectInstance.save()
    await userService.updateProject(project['owner'], created_project['_id'])
    return created_project
}

getProjects = async() => {
    let projects = await Project.find({}).populate("avances")
    return projects
}

getProjectById = async(projectId)=>{
    let project = await Project.findById(projectId).exec()
    let projects = await Project.findById(projectId).populate("avances")
    return project, projects
}

deleteProject = async(projectId, project, callback)=>{
    let projectd = Project.findByIdAndDelete(projectId, project, callback, {new: true})
    return projectd
}

updateProject = async(projectId, project)=>{
    let newProject = await Project.findByIdAndUpdate(projectId, project,{new:true})
    await userService.updateProject(project['owner'], newProject['_id'])
    return newProject
}

updateAvances = async(projectId, AvancesId)=>{
    let project = await Project.findByIdAndUpdate(projectId,{
        $push:{
            avances:AvancesId
        }
    })
    return project
}

updateInscripcion = async(projectId, inscripcionId)=>{
    let project = await Project.findByIdAndUpdate(projectId,{
        $push:{
            inscripcion:inscripcionId
        }
    })
    return project
}

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    deleteProject,
    updateProject,
    updateAvances,
    updateInscripcion
}