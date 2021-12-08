const {gql} = require("apollo-server-express")


const projectType = gql`

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
type Avances {
    _id: ID!
    fechaAvance: DateTime!
    descripcion: String!
    observacionesLider: String!
    estudiante: ID!
    projects: ID!
}
type Project {
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
    getProjects: [Project]
    getProjectById(_id:String):Project
}
type Mutation {
createProject(
    nombre: String!
    objetivosGenerales: String!
    objetivosEspecificos: String!
    fechaInicio: DateTime!
    fechaTerminacion: DateTime!
    estadoProyecto: String!
    faseProyecto: String!
    presupuesto: Float!
    owner: ID!
    ): Project
updateProject (
    _id: ID!
    nombre: String
    objetivosGenerales: String
    objetivosEspecificos: String
    fechaInicio: DateTime
    fechaTerminacion: DateTime
    estadoProyecto: String
    faseProyecto: String
    presupuesto: Float
    owner: ID
    ): Project
deleteProject (
    _id: ID!
    nombre: String
    objetivosGenerales: String
    objetivosEspecificos: String
    fechaInicio: DateTime
    fechaTerminacion: DateTime
    estadoProyecto: String
    faseProyecto: String
    presupuesto: Float
    owner: ID
    ): Project
}

`;

module.exports = {projectType}
