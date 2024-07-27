import { githubRoutes } from "../constants";
import { BaseParams, MyContext, OwnerNamePayload } from "../types";

const resolvers = {
  Query: {
    listRepositories: async (
      _: any,
      { token }: BaseParams,
      { ax }: MyContext,
    ) => {
      const response = await ax(token).get(githubRoutes.userRepos());
      return response.data.map((repo) => ({
        name: repo.name,
        size: repo.size,
        owner: repo.owner.login,
        token,
      }));
    },

    repositoryDetails: async (
      _,
      { token, owner, name }: OwnerNamePayload,
      { ax }: MyContext,
    ) => {
      const repoResponse = await ax(token).get(
        githubRoutes.ownersRepo({ owner, name }),
      );
      const repoData = repoResponse.data;
      return {
        name: repoData.name,
        size: repoData.size,
        owner: repoData.owner.login,
        isPrivate: repoData.private,
        token,
      };
    },
  },
  RepositoryDetails: {
    ymlFileContent: async (parent, params, { ax }, some: any) => {
      const { name, owner, token } = parent;
      const contentsResponse = await ax(token).get(
        githubRoutes.ownersRepoContents({ owner, name }),
      );

      const ymlExtensionRegExp = /(\.ya{0,1}ml)$/i;
      for (const file of contentsResponse.data) {
        if (ymlExtensionRegExp.test(file.name)) {
          const fileResponse = await ax(token).get(file.download_url);
          return fileResponse.data;
        }
      }
    },
    activeWebhooks: async (parent, params, { ax }) => {
      const { name, owner, token } = parent;
      const hooksResponse = await ax(token).get(
        githubRoutes.ownersRepoHooks({ owner, name }),
      );
      return hooksResponse.data.map((hook) => hook.config.url);
    },
    fileCount: async (parent, params, { ax }) => {
      const { name, owner, token } = parent;
      const contentsResponse = await ax(token).get(
        githubRoutes.ownersRepoContents({ owner, name }),
      );
      return contentsResponse.data.length;
    },
  },
};

export default resolvers;
