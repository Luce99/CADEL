// El index.js de la carpeta types
// Iniciamos con las importaciones de los archivos user y project, OJOOO recordar el uso de las llaves {}, ya que no estamos llamando al objeto, si no esa parte puntual del objeto
const {userType} = require('./user')
const {projectType} = require('./project')
const {progressType} = require('./progress')
const {inscriptionType} = require('./inscription')

// generamos un array con las variables creadas
const types = [userType, projectType,progressType,inscriptionType]

// Realizamos la exportación
module.exports ={
  types
}