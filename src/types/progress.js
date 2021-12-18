const {gql} = require("apollo-server-express")
const progressType = gql`
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
  type progress{
    _id: ID!
    idProject: ID!
    idStudent: ID!
    advanceDate: DateTime!
    advanceDescription: String!
    leaderObservation: String!
  }

  type Query{
    getProgress:[progress]
    getProgressById(_id:String):progress
  }

  type Mutation{
    createProgress(
      idProject: ID!
      idStudent: ID!
      advanceDate: DateTime
      advanceDescription: String
      leaderObservation: String
    ): progress
    updateProgress(
      _id: ID!
      advanceDate: DateTime!
      advanceDescription: String!
      leaderObservation: String!
    ): progress
    deleteProgress(
      _id: ID!
      idProject: ID
      idStudent: ID
      advanceDate: DateTime
      advanceDescription: String
      leaderObservation: String
    ):progress
  }
`;

module.exports = {progressType}