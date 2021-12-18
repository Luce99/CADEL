// Trabajando en el user.js localizado dentro de la carpeta types.
// aquí vamos a poner los tipos de user.js
// Se debe realizar con llaves, ya que solo traemos una parte puntual de apollo server, la cual se llama gql, el gql es un modulo que nos permite realizar todo este tipo de declaración, el cual será entendido por apollo y así poder ejecutar las funciones
const {gql} = require("apollo-server-express")
// Declarandolo, ojo dentro de los backtics se coloca todo lo que se va a declarar (schemas,querys y mutaciones) y dentro de estos dos ultimos hemos utilizado los servicios
/* 
  1. Iniciamos con los schemas
  _id: ID! ----> el signo de admiración indica que es una variable obligatoria
  en projects: [Project], recordar que eso me obliga a declarar type Project, ya que hay una dependencia.
  2. Query
  3. Mutation
  para numeros debe ser float o int y para fecha 
  primero debo colocar scalar DateTime
  DateTime
 */
const userType = gql`
scalar DateTime

  type User{
    _id: ID!
    name: String!
    lastName: String!
    identification: String!
    email: String!
    password: String!
    rol: String!
    status: String
    projects:[Project]
  }
  type Project{
    _id: ID!
    projectName: String!
    generalObject: String!
    specificObject: String!
    budget: Float!
    startDate: DateTime!
    endDate: DateTime!
    leader: ID
  }

  type Query {
    getUsers: [User]
    loginUser(email:String, password:String):User
    getUserById(_id:String): User
  }

  type Mutation {
    createUser(
      name: String!
      lastName: String!
      identification: String!
      email: String!
      password: String!
      rol: String!
      status: String
    ): User
    updateUser(
      _id: ID!
      name: String
      lastName: String
      identification: String
      email: String
      password: String
      rol: String
      status: String
    ): User
    deleteUser(
      _id: ID!
      name: String
      lastName: String
      identification: String
      email: String
      password: String
      rol: String
      status: String
    ): User
  }
`;

// Exportando
module.exports ={userType}