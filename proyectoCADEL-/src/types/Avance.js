const {gql} = require("apollo-server-express")

const avancesType = gql`

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
type Avances {
    _id: ID!
    fechaAvance: DateTime!
    descripcion: String!
    observacionesLider: String!
    estudiante: ID!
    projects: ID!
}
type Query {
    getAvances: [Avances]
    getAvancesById(_id:String):Avances
}
type Mutation {
createAvances(
    fechaAvance: DateTime!
    descripcion: String!
    observacionesLider: String!
    estudiante: ID!
    projects: ID!
    ): Avances
updateAvances (
    _id: ID!
    fechaAvance: DateTime
    descripcion: String
    observacionesLider: String
    estudiante: ID
    projects: ID
    ): Avances
deleteAvances (
    _id: ID!
    fechaAvance: DateTime
    descripcion: String
    observacionesLider: String
    estudiante: ID
    projects: ID
    ): Avances

}
`;

module.exports = {avancesType}