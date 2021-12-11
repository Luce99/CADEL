const User =  require('../models/user')
const bcrypt = require("bcryptjs");
const rondasDeSal = 10;

createUser = async (args) => {
    try {
        const existingUser = await User.findOne({ correo: args.correo });
        if (existingUser) {
          throw new Error('El usuario ya existe');
        }
        const hashedPassword = await bcrypt.hash(args.contrasena, rondasDeSal);
        let userInstance = new User({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        tipoUsuario: args.tipoUsuario,
        estado: 'pendiente',
        correo: args.correo,
        contrasena: hashedPassword
        })
    const user = await userInstance.save()
    return user
}catch (err) {
    throw err;
  }
}

getUsers = async ()=> {
    let user = await User.find({}).populate("projects")
    return user
}

getUserById = async(userId) =>{
    let user = await User.findById(userId).populate('projects')
    return user
}

login = async({correo, contrasena}) => {
    let user = await User.findOne({correo: correo});
    if (!user){
        throw new Error ('El usuario no existe');
    }
    const isEqual = await bcrypt.compare(contrasena, user.contrasena);
    if (!isEqual){
        throw new Error ('Contraseña incorrecta');
    };

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
    login,
    updateUser,
    deleteUser,
    updateProject,
    updateAvances,
    updateInscripcion
}