const Inscription = require('../models/inscription')
const userService = require('./user')
const projectService = require('./project')
const fechaHora = new Date();

createInscription = async(args) =>{
  let inscriptionInstance = new Inscription({
    idStudent: args.idStudent,
    idProject: args.idProject,
    state: 'Pendiente',
    admitionDate: fechaHora.getTime(),
    // egressDate: fechaHora.getTime()
  })
  create_inscription = await inscriptionInstance.save()
  await userService.updateInscription(args['idStudent'], create_inscription['_id'])
  await projectService.updateInscription(args['idProject'],create_inscription['_id'])
  return create_inscription
}

getInscription = async() =>{
  let inscription = await Inscription.find({})
  return inscription
}

getInscriptionById = async(inscriptionId) =>{
  let inscription = await Inscription.findById(inscriptionId).exec()
  return inscription
}

updateInscription = async(inscriptionId, inscription) =>{
  let newInscription = await Inscription.findByIdAndUpdate(inscriptionId, inscription, {new:true})
  await userService.updateInscription(inscription['idStudent'], newInscription['_id'])
  await projectService.updateInscription(inscription['idProject'],newInscription['_id'])
  return newInscription
}

deleteInscription = async(inscriptionId, inscription,callback)=> {
  let inscriptiond = Inscription.findByIdAndDelete(inscriptionId,inscription,callback,{new:true})
  return inscriptiond
}

// exportación
module.exports = {
  createInscription,
  getInscription,
  getInscriptionById,
  updateInscription,
  deleteInscription
}