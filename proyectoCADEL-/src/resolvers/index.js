const {projectResolvers} = require('./Project')
const {userResolvers} = require('./user')
const {inscripcionResolvers} = require ('./Inscripcion')
const {avancesResolvers} = require ('./Avance')
const dateTime  = require('./datetime')

const resolvers = [projectResolvers, userResolvers, inscripcionResolvers, avancesResolvers, dateTime]

module.exports = {resolvers}
