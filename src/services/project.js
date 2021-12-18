// Trabajando en project.js
const Project = require('../models/project')
const userService = require('./user')


createProject = async(args) => {
  let projectInstance = new Project({
    projectName: args.projectName,
    generalObject: args.generalObject,
    specificObject: args.specificObject,
    budget: args.budget,
    startDate: args.startDate,
    endDate: args.endDate,
    leader: args.leader,
    projectState: 'Inactivo',
    phase: 'null'
  })
  create_project = await projectInstance.save()
  // Tener en cuenta que no debemos guardar solo un proyecto, ya que este, debe tener un usuario asociado, por lo que tenemos que llamar la función que creamos en user.js de nombre updateProject
  // Recordar que el updateProject necesita como parametros el userId(este es el leader definido en project.js de models) y el projectId
  await userService.updateProject(args['leader'], create_project['_id'] )
  return create_project
}

// Crear las funciones de Crud
getProjects = async() =>{
  let projects = await Project.find({}).populate('progress')
  return projects
}

getProjectById = async(projectId)=>{
  let project = await Project.findById(projectId).exec()
  let projects = await Project.findById(projectId).populate("progress")
  return project, projects
}


updateProject = async(projectId, project) =>{
  let newProject = await Project.findByIdAndUpdate(projectId,project,{new:true})
  //  Recordar que el updateProject necesita como parametros el userId(este es el leader definido en project.js de models) y el projectId
  await userService.updateProject(project['leader'], create_project['_id'])
  return newProject
}

deleteProject = async(projectId,project,callback)=>{
  let projectd = await Project.findByIdAndDelete(projectId,project, callback, {new:true})
  return projectd
}

updateInscription = async(projectId, inscriptionId) =>{
  let project = await Project.findByIdAndUpdate(projectId,{
    $push:{
      inscription: inscriptionId
    }
  })
  return project
}

updateProgress = async(projectId, progressId) =>{
  let project = await Project.findByIdAndUpdate(projectId,{
    $push:{
      progress:progressId
    }
  })
  return project
}

// Para realizar las exportaciones
module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  updateInscription,
  updateProgress
}
