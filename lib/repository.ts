/** Repository facts shared by the site and the build scripts; it reads no environment variables. */
export const repository = {
  owner: "bird-chinese-community",
  name: "bird-chinese-community.github.io",
  branch: "main",
  contentDir: "content/docs",
} as const;
export const repositoryUrl = `https://github.com/${repository.owner}/${repository.name}`;
export const organizationUrl = `https://github.com/${repository.owner}`;
