import { gql } from "apollo-server";

const typeDefs = gql`
  type Repository {
    name: String
    size: Int
    owner: String
  }

  type RepositoryDetails {
    name: String
    size: Int
    owner: String
    isPrivate: Boolean
    fileCount: Int
    ymlFileContent: String
    activeWebhooks: [String]
  }

  type Query {
    listRepositories(token: String!): [Repository]
    repositoryDetails(
      token: String!
      owner: String!
      name: String!
    ): RepositoryDetails
  }
`;

export default typeDefs;
