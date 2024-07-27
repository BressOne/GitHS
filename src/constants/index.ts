import { OwnerAndName } from "src/types";

export const githubBaseApiUrl = "https://api.github.com";

export const githubRoutes = {
  userRepos: () => `${githubBaseApiUrl}/user/repos`,
  ownersRepo: ({ owner, name }: OwnerAndName) =>
    `${githubBaseApiUrl}/repos/${owner}/${name}`,
  ownersRepoContents: ({ owner, name }: OwnerAndName) =>
    `${githubBaseApiUrl}/repos/${owner}/${name}/contents`,
  ownersRepoHooks: ({ owner, name }: OwnerAndName) =>
    `${githubBaseApiUrl}/repos/${owner}/${name}/hooks`,
};
