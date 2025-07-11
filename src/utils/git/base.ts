import simpleGit, { CheckRepoActions } from 'simple-git'

/**
 * simple-git实例客户端
 * @param path 仓库路径
 */
export const git = (path?: string) => simpleGit(path)

/**
 * 判断是否为git仓库
 * @param repoPath 仓库路径
 */
export const isGitRepo = async (repoPath: string): Promise<boolean> => {
  try {
    const result = await git(repoPath).checkIsRepo(CheckRepoActions.IS_REPO_ROOT)
    return result
  } catch {
    return false
  }
}
