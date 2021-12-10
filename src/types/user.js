const {gql} = require("apollo-server-express")


const userType = gql`
scalar DateTime

type User{
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    tipoUsuario: String!
    estado: String!
    correo: String!
    contrasena: String!
    projects: [Project!]
}

type Project{
    _id: ID!
    nombre: String!
    objetivosGenerales: String!
    objetivosEspecificos: String!
    fechaInicio: DateTime!
    fechaTerminacion: DateTime!
    estadoProyecto: String!
    faseProyecto: String!
    presupuesto: Float!
    avances: [Avances!]
    owner: ID!
}

type Query {
    getUsers: [User]
    getUserById(_id:String!): User
    login(correo: String!, contrasena: String!): User
}
type Mutation {
    createUser(
        nombre: String!
        apellido: String!
        identificacion: String!
        tipoUsuario: String!
        estado: String!
        correo: String!
        contrasena: String!
        ): User
    updateUser(
        _id: ID!
        nombre: String
        apellido: String
        identificacion: String
        tipoUsuario: String
        estado: String
        correo: String
        contrasena: String
        ): User
    deleteUser(
        _id: ID!
        nombre: String
        apellido: String
        identificacion: String
        tipoUsuario: String
        estado: String
        correo: String
        contrasena: String
        ): User
}
`;

module.exports = {userType}
