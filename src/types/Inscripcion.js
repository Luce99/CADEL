const {gql} = require("apollo-server-express")

const inscripcionType = gql`
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
type Inscripcion {
    _id: ID!
    estadoInscripcion: String
    fechaIngreso: String
    fechaEgreso: String
    estudiante: ID
    projects: ID
}
type Query {
    getInscripcion: [Inscripcion]
    getInscripcionById(_id:String):Inscripcion
}
type Mutation {
createInscripcion(
    estadoInscripcion: String
    fechaIngreso: String
    fechaEgreso: String
    estudiante: ID
    projects: ID
    ): Inscripcion
updateInscripcion (
    _id: ID!
    estadoInscripcion: String
    fechaIngreso: String
    fechaEgreso: String
    estudiante: ID
    projects: ID
    ): Inscripcion
}
`;

module.exports = {inscripcionType}
