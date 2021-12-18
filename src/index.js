// Iniciamos trayendo express (ya que previamente lo hemos instalado con el npm install express, lo mismo con mongoose y el apollo-server)
const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express');
// Importando los index.js de resolvers y types, recordando las {}
const {resolvers} = require('./resolvers') //No es necesario colocar mas nada, ya que por defecto el me trae el index.js de dicha carpeta
const {types} = require('./types')
const cors = require('cors');

// Inicializamos la aplicación express
const app = express();
app.use(cors())
app.use(express.json());

// Configurar el servidor de apollo, actividad que se realiza sobre express
const server = new ApolloServer({
  // como configuración pasamos los typeDefs, siendo estos los types que hicimos. Hacemos lo mismo con los resolvers
  typeDefs: types,
  resolvers: resolvers
})

// Iniciamos nuestra conexión a la base de datos (para esto, se necesita una base de datos Mongo[recomendación de MongoAtlas])
// OJOOOO, para conectarme, undo connect en mongo Atlas, y le doy a "Connect using MongoDB compass", escojo la opción de "I have MongoDB Compass" y copio el codigo, recordar que al copiar el código donde dice <password>, debo colocar mi clave. También puedo cambiar el /test, por el nombre de repositorio donde quiero que se almacene la información
// Se llama un método a traves de una función asincrona, 
mongoose.connect("mongodb+srv://Daniel:MpSAtlasDa1719GU@cluster0.zl7f8.mongodb.net/bdHU",async()=>{ // Con esto ya se puede inicializar en el servidor
  console.log('Conexión a bd exitosa')
  // Hacemos un listen en nuestro app, donde primero se coloca el puerto, luego una función asincrona
// Con 5010 puedo entrar al localhost:5010
  app.listen(5010, async()=>{
    // Una vez se tiene el servidor de apolloServer, se inicializa aquí, con el await (nombre servidor).start()
    await server.start()
    // Aplicamos el Middleware, siendo esta una capa intermedia que actua entre express y el servidor que acabamos de crear, conectandolo, se debe hacer sobre app, ya que en este hemos instanciado express
    server.applyMiddleware({app})

    console.log('Servidor inicializado en puerto 5010')
  })
})
// Las entidades o modelos las creamos a traves de schemas que nos proporciona mongoose, la cual nos permite declarar cada una de las variables(atributos) que tendremos de nuestra entidad