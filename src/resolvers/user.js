// trabajando en user.js de resolvers
// iniciamos importando los servicios del usuario
const user = require('../models/user')
const userService = require('../services/user')

// procedemos creando una variable y dentro de esta es donde vaoms a trabajar
const userResolvers = {
  // Iniciamos definiendo los querys, con una varable .json para la configuración, al igual que la variable mutation
  Query:{ // aquellos que obtienen nuestra BD
    // En el servicio de usuario(user.js), tomamos inicialmente los métodos que no alteran nuestra base de datos
    getUsers: async(parent,args) =>{
      //lógica del proceso
      let users = await userService.getUsers()
      return users
    },
    loginUser: async(parent, args) =>{
      const user = await userService.loginUser(args)
      return user
    },
    getUserById: async(parent,args) =>{
      let user = await userService.getUserById(args._id)//recibe el userId
      return user
    }

  },
  Mutation:{ // aquellos que alteran nuestra BD
    createUser: async(parent, args) =>{
      let user = await userService.createUser(args)
      return user
    },
    updateUser: async(parent,args) =>{
      let userUpdate = await userService.updateUser(args._id,args)
      return userUpdate
    },
    deleteUser: async(parent,args) =>{
      let userDelete = await userService.deleteUser(args._id,args)
      return userDelete
    }
  }
}
// Con esto creamos un resolver completo de usuarios
module.exports = {
  userResolvers
}