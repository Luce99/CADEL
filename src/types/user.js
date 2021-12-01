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
    constrasena: String!
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
    owner: ID!
}
type Query {
    getUsers: [User]
    getUserById(_id:String): User
}
type Mutation {
    createUser(
        nombre: String!
        apellido: String!
        identificacion: String!
        tipoUsuario: String!
        estado: String!
        correo: String!
        constrasena: String!
        ): User
        updateUser(_id: ID!
            nombre: String!
            apellido: String!
            identificacion: String!
            tipoUsuario: String!
            estado: String!
            correo: String!
            constrasena: String!
            ): User
}
`;

module.exports = {userType}
