const {gql} = require("apollo-server-express")

const projectType = gql`
type User{
    _id: ID!
    nombre: String
    apellido: String
    identificacion: String
    tipoUsuario: String
    estado: String
    correo: String!
    constrasena: String 
    projects: [Project]
}
type Project {
    _id: ID!
    nombre: String
    objetivosGenerales: String
    objetivosEspecificos: String
    fechaInicio: String
    fechaTerminacion: String
    estadoProyecto: String
    faseProyecto: String
    presupuesto: String
    owner: ID
}
type Query {
    getProjects: [Project]
    getProjectById(_id:String):Project
}
type Mutation {
createProject(
    nombre: String
    objetivosGenerales: String
    objetivosEspecificos: String
    fechaInicio: String
    fechaTerminacion: String
    estadoProyecto: String
    faseProyecto: String
    presupuesto: String
    owner: ID
    ): Project
updateProject (
    _id: ID!
    nombre: String
    objetivosGenerales: String
    objetivosEspecificos: String
    fechaInicio: String
    fechaTerminacion: String
    estadoProyecto: String
    faseProyecto: String
    presupuesto: String
    ): Project
}
`;

module.exports = {projectType}
