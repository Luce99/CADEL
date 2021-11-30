const {projectResolvers} = require('./Project')
const {userResolvers} = require('./user')
const {inscripcionResolvers} = require ('./Inscripcion')
const {avancesResolvers} = require ('./Avance')

const resolvers = [projectResolvers, userResolvers, inscripcionResolvers, avancesResolvers]

module.exports = {resolvers}
