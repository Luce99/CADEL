// Trabajando en user.js
// Para crear los métodos que nos van a comunicar con la BD, los traemos el schema user que creamos previamente
const User = require('../models/user')
// Para poder hashear contraseñas se instala el paquete bcryptjs, colocando en la terminal npm install bcryptjs
const bycrypt = require("bcryptjs");
// const { AggregationCursor } = require('mongoose');
// const bcrypt = require('bcryptjs/dist/bcrypt');
const securityLevel = 10; //Nivel de seguridad

// Con lo anterior, ya podemos crear nuestros métodos, por lo que empezamos a crear nuestros métodos:
// Resumiendo, el método createUser recibe como parametro una entidad user, y la entidad user la metemos dentro del modelo de mongoose de nombre User, por lo que llamos las variables que definimos en el schema de User.js
createUser = async(args) =>{
  // Creamos una instancia de nuestro User
  try {
    const existingUser = await User.findOne({email:args.email});
    if (existingUser){
      throw new Error('User already exist');
    }
    const hashedPassword = await bycrypt.hash(args.password, securityLevel);
    let userInstance = new User({
      name: args.name,
      lastName: args.lastName,
      identification: args.identification,
      email: args.email,
      password: hashedPassword,
      rol: args.rol,
      status: 'pendiente',
    })
    // Hacemos la creación del usuario (user), le decimos que espere el llamado asincrono (await)
    const user = await userInstance.save()
    return user
  } catch (err){
    throw err;
  }
}

// Para tener CRUD de usuarios

getUsers = async() =>{
  let user = await User.find({}).populate("projects")
  return user
}

loginUser = async(email,password) =>{
  let user = await User.find({email:email});
  if (!user){
    throw new Error ('User not found')
  }
  const isEqual = await bcrypt.compare(password,user.password);
  if(!isEqual){
    throw new Error ('wrong password');
  }
  return user
}

getUserById = async(userId) => {
  // El populate permite acceder a la información que tenemos en la relación, para que no nos traiga los Id que relacionamos
  let user = await User.findById(userId).populate("projects") //es projects pq así fue como la definimos en nuestros documentos de la colección user.js, si deseo colocar multiples. debo colocar .populate("") para cada uno
  return user
}

// Para actualizar
updateUser = async(userId, user) => {
  // Pasamos el Id y luego indicamos el cuerpo que vamos a actualizar, el {new:true} le indica al sistema que traiga la información actualizada
  let new_user = User.findByIdAndUpdate(userId, user, {new:true})
  return new_user
}

deleteUser = async(userId,user,callback)=> {
  let userd = User.findByIdAndDelete(userId,user,callback, {new:true})
  return userd
}

// Para actualizar la variable proyecto, esto es debido a que en mi colección usario yo cree el documento projects e inicialmente el usuario arranca con 0 proyectos, por lo que dicho documento sería un array vacion, pero si yo quiero agregarle un proyecto, ps debo actualizar el schema usuario y al vector agregarle el Id del nuevo proyecto y si después quiero agregarle mas proyectos a ese usuario, debo hacer un push o un append a project.js para agregarle el siguiente proyecto, por lo que se debe hacer un método para esa parte 
// Aqui tenemos que recibir 2 cosas 1.El usuario sobre quien vamos a hacer la actualización y 2. el proyecto que vamos a agregar (projectId)
updateProject = async(userId, projectId) => {
  let user = await User.findByIdAndUpdate(userId,{
    // Por temos de practicidad y para no tener que hacer appends, mongoose nos proporciona métodos para facilitar las cosas
  $push:{ //Estamos indicando que a la variable projects: de nuestro schema users se le hace un push
    projects:projectId
  }
  })
  return user
}

updateProgress = async(userId,progressId) => {
  let user = await User.findByIdAndUpdate(userId, {
    $push:{
      progress:progressId
    }
  })
  return user
}

updateInscription = async(userId,inscriptionId) =>{
  let user = await User.findByIdAndUpdate(userId, {
    $push:{
      inscription: inscriptionId
    }
  })
  return user
}



module.exports = {
  createUser,
  getUsers,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
  updateProject,
  updateProgress,
  updateInscription
}