const User =  require('../models/user')

createUser = async (user) => {
    let userInstance = new User(user)
    user = await userInstance.save()
    return user
}

getUsers = async ()=> {
    let user = await User.find({}).populate("projects")
    return user
}

getUserById = async(userId) =>{
    let user = await User.findById(userId).populate('projects')
    return user
}

updateUser = async(userId, user)=>{
    let new_user = User.findByIdAndUpdate(userId, user,{new: true})
    return new_user
}

deleteUser = async(userId, user, callback)=>{
    let userd = User.findByIdAndDelete(userId, user, callback, {new: true})
    return userd
}

updateProject = async(userId, projectId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            projects:projectId
        }
    })
    return user
}

updateAvances = async(userId, AvancesId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            avances:AvancesId
        }
    })
    return user
}

updateInscripcion = async(userId, inscripcionId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            inscripcion:inscripcionId
        }
    })
    return user
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    updateProject,
    updateAvances,
    updateInscripcion
}