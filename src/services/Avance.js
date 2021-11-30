const Avances = require('../models/Avance')
const userService = require('./user')
const projectService = require('./Project')


createAvances = async(avances) =>{
    let avancesInstance = new Avances(avances)
    created_avances = await avancesInstance.save()
    await userService.updateAvances(avances['estudiante'], created_avances['_id'])
    await projectService.updateAvances(avances['projects'], created_avances['_id'])
    return created_project
}

getAvances = async() => {
    let avances = await Avances.find({})
    return avances
}

getAvancesById = async(avancesId)=>{
    let avances = await Avances.findById(avancesId).exec()
    return avances
}

updateAvances = async(avancesId, avances)=>{
    let newAvances = await Avances.findByIdAndUpdate(avancesId, avances,{new:true})
    return newAvances
}

module.exports = {
    createAvances,
    getAvances,
    getAvancesById,
    updateAvances
}