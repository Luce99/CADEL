// Trabajando en el project.js localizado dentro de la carpeta types.
const {gql} = require("apollo-server-express")
const projectType = gql`
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
    progress: [progress!]
  }

  type Query{
    getProjects: [Project]
    getProjectById(_id:String):Project
  }

  type Mutation{
    createProject(
      projectName: String!
      generalObject: String!
      specificObject: String!
      budget: Float!
      startDate: DateTime!
      endDate: DateTime!
      leader: ID
      projectState: String
      phase: String
    ):Project
    updateProject(
      _id: ID!
      projectName: String
      generalObject: String
      specificObject: String
      budget: Float
      startDate: DateTime
      endDate: DateTime
      projectState: String
      phase: String
    ):Project
    deleteProject(
      _id: ID!
      projectName: String
      generalObject: String
      specificObject: String
      budget: Float
      startDate: DateTime
      endDate: DateTime
      leader: ID
      projectState: String
      phase: String
    ):Project
  }
`;

module.exports = {projectType}