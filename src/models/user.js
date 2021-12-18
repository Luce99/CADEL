// Doc trabajado en User.js
// Se llama las dependencias que importamos por consola
const mongoose = require('mongoose');
// llamamos a schema también, el cual viene dentro de mongoose (es un atributo)
const Schema= mongoose.Schema

// Importando la colección project ya que la necesitamos
const project = require('./project')

// a traves del atributo .Schema, podemos inicializar dicho objeto
// Creamos entonces el objeto, dentro de Schema() realizamos toda la configuración
const UserSchema = new Schema({
  name: {
    type:String, //Debemos indicar que tipo de variable será name
    required: true 
  },
  lastName: {
    type: String,
    required: true // Por defecto el sistema ya tiene requiered:false, sin embargo, es una buena practica realizar esto. Aquí lo que hago es indicar si es o no obligación implementarlo
  },
  identification: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{ //Recordar que después toca realizar el tema de encriptar
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true
  },
  status: {
    type: String,
  },
  //Ya que un usuario puede tener multiples proyectos, se representa con un array, por lo que es importante que el tipo(type) de comunicación sea por medio del objectId. Por lo que se tendrá vinculado los proyectos que esten relacionados(creados) a dicho id
  projects:[{
    type: Schema.Types.ObjectId,
    //Indicamos la referencia(ref) a donde va a apuntar (la otra colección)
    ref: "project" // COmo project se encuentra en otro archivo, debo importarlo
  }]
  
})

// Finalmente, se debe exportar el schema creado, y esto se hace por medio de un module.export, con el mongoose que trajimos. dentro de los parentesis de.model(nombre de entidad(colección) a exportar, schema(documentos))
module.exports = mongoose.model("user", UserSchema)
