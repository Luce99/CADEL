const {gql} = require("apollo-server-express")
const inscripcionType = gql`

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
type Inscripcion {
    _id: ID!
    estadoInscripcion: String!
    fechaIngreso: DateTime!
    fechaEgreso: DateTime!
    estudiante: ID!
    projects: ID!
}
type Query {
    getInscripcion: [Inscripcion]
    getInscripcionById(_id:String):Inscripcion
}
type Mutation {
createInscripcion(
    estadoInscripcion: String
    fechaIngreso: DateTime
    fechaEgreso: DateTime
    estudiante: ID!
    projects: ID!
    ): Inscripcion
updateInscripcion (
    _id: ID!
    estadoInscripcion: String
    fechaIngreso: DateTime
    fechaEgreso: DateTime
    estudiante: ID
    projects: ID
    ): Inscripcion
deleteInscripcion (
    _id: ID!
    estadoInscripcion: String
    fechaIngreso: DateTime
    fechaEgreso: DateTime
    estudiante: ID
    projects: ID
    ): Inscripcion
}
`;

module.exports = {inscripcionType}
