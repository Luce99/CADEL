const {gql} = require("apollo-server-express")
const inscriptionType = gql`
  scalar DateTime
  
  type User{
    _id: ID!
    name: String!
    lastName: String
    identification: String!
    email: String!
    password: String!
    rol: String!
    status: String!
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
    projectState: String!
    phase: String!
  }
  type inscription{
    _id: ID!
    idStudent: ID!
    idProject: ID!
    state: String!
    admitionDate: DateTime!
    egressDate: DateTime!
  }
  type Query{
    getInscription: [inscription]
    getInscriptionById(_id:String): inscription 
  }
  type Mutation{
    createInscription(
      idStudent: ID!
      idProject: ID!
      state: String
      admitionDate: DateTime
      egressDate: DateTime
    ): inscription
    updateInscription(
      _id: ID!
      state: String
      admitionDate: DateTime
      egressDate: DateTime
    ): inscription
    deleteInscription(
      _id: ID!
      idStudent: ID
      idProject: ID
      state: String
      admitionDate: DateTime
      egressDate: DateTime
    ): inscription
  }
`;

module.exports = {inscriptionType}