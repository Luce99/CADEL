const userService = require ("../services/user")

const userResolvers = {
    Query:{
        getUsers: async(parent,args)=>{
            let users =  await userService.getUsers()
            return users
        },
        getUserById: async (parent,args)=>{
            let user = await userService.getUserById(args._id)
            return user
        }
    },
    Mutation:{
        createUser: async(parent, args) => {
            let user = await userService.createUser(args)
            return user
        },
        updateUser: async(parent, args) => {
            let userUpdate = userService.updateUser(args._id, args)
            return userUpdate
        },
        deleteUser: async(parent, args) =>{
            let userDelete = userService.deleteUser(args._id, args)
            return userDelete
        },
    }
}

module.exports = {
    userResolvers
}