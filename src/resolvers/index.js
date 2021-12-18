// Trabajando en el index.js localizado dentro de la carpeta resolvers.
// Todo el código aquí implementado facilita el trabajo y el orden
// El objetivo de este index.js es traer(importar) los resolvers creados
// OJOOO recordar que se deben crear en llaves, pq no nos vamos a traer toda la importación, solo el projectResolvers, sin las llaves NO FUNCIONA
const {userResolvers} = require('./user')
const {projectResolvers} = require('./project')
const {dateTimeResolvers} = require('./dateTime')
const {progressResolvers} = require('./progress')
const {inscriptionResolvers} = require('./inscription')

// Ahora las juntamos en una variable, si tengo nuevas entidades, es solo agregarlas dentro de la constante creada
const resolvers = [userResolvers,projectResolvers, dateTimeResolvers, progressResolvers,inscriptionResolvers ]

// Continua la exportación
module.exports = {resolvers}
