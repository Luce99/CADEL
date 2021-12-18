const Progress = require('../models/progress')
const projectService = require('./project')
const userService = require('./user')
const fechaHora = new Date()

createProgress = async(args) =>{
  let progressInstance = new Progress({
    idProject: args.idProject,
    idStudent: args.idStudent,
    advanceDate: fechaHora.getTime(),
    advanceDescription: args.advanceDescription,
    leaderObservation: 'null',
  })
  create_progress = await progressInstance.save()
  await projectService.updateProgress(args['idProject'],create_progress['_id'])
  await userService.updateProgress(args['idStudent'], create_progress['_id'])
  return create_progress
}

getProgress = async() =>{
  let progress = await Progress.find({})
  return progress
}

getProgressById = async(progressId) =>{
  let progress = await Progress.findById(progressId).exec()
  return progress
}

updateProgress = async(progressId, progress) =>{
  let newProgress = await Progress.findByIdAndUpdate(progressId,progress, {new:true})
  await projectService.updateProgress(progress['idProject'],newProgress['_id'])
  await userService.updateProgress(progress['idStudent'], newProgress['_id'])
  return newProgress
}

deleteProgress = async(progressId,progress,callback)=> {
  let progressd = Progress.findByIdAndDelete(progressId,Progress,callback,{new:true})
  return progressd
}

// Exportación
module.exports = {
  createProgress,
  getProgress,
  getProgressById,
  updateProgress,
  deleteProgress
}