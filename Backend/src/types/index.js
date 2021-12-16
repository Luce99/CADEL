const {projectType} = require('./Project')
const {userType}= require ('./user')
const {avancesType}= require('./Avance')
const {inscripcionType}= require ('./Inscripcion')


const types = [projectType, userType, avancesType, inscripcionType]
module.exports = {
    types
}