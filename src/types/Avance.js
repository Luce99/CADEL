const {gql} = require("apollo-server-express")

const avancesType = gql`
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
type Avances {
    _id: ID!
    fechaAvance: String
    descripcion: String
    observacionesLider: String
    estudiante: ID
    projects: ID
}
type Query {
    getAvances: [Avances]
    getAvancesById(_id:String):Avances
}
type Mutation {
createAvances(
    fechaAvance: String
    descripcion: String
    observacionesLider: String
    estudiante: ID
    projects: ID
    ): Avances
updateAvances (
    _id: ID!
    fechaAvance: String
    descripcion: String
    observacionesLider: String
    estudiante: ID
    projects: ID
    ): Avances
}
`;

module.exports = {avancesType}