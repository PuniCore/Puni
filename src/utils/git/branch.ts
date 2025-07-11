import type { GitBranchInfo } from '@puni/types/utils/git/branch'
import { exists } from '@puni/utils/fs/fsPromise'
import { formatPath } from '@puni/utils/fs/path'
import { git, isGitRepo } from '@puni/utils/git/base'

/**
 * 获取本地仓库的本地分支列表
 * @param repoPath 仓库路径
 * @returns 分支列表
 */
export const getLocalBranches = async (
  repoPath: string
): Promise<string[]> => {
  if (!(await exists(repoPath))) return []
  if (!await isGitRepo(repoPath)) return []
  try {
    const repo = git(repoPath)
    const branches = await repo.branchLocal()
    return branches.all
  } catch {
    return []
  }
}

/**
 * 获取本地仓库的本地默认分支
 * @param repoPath 仓库路径
 * @returns 默认分支
 */
export const getDefaultBranch = async (
  repoPath: string
): Promise<string | null> => {
  if (!(await exists(repoPath))) return null
  if (!await isGitRepo(repoPath)) return null
  try {
    const repo = git(repoPath)
    const branch = await repo.revparse(['--abbrev-ref', 'HEAD'])
    return branch.trim()
  } catch {
    return null
  }
}

/**
 * 获取本地仓库的远程分支列表
 * @param repoPath 仓库路径
 * @returns 分支信息
 */
export const getLocalRepoBranchInfo = async (repoPath: string): Promise<GitBranchInfo> => {
  const branches = await getLocalBranches(repoPath)
  const defaultBranch = await getDefaultBranch(repoPath)
  return {
    branches,
    defaultBranch
  }
}

/**
 * 获取本地仓库的远程分支列表
 * @param repoPath 仓库路径
 * @returns 分支列表
 */
export const getRemoteBranches = async (
  repoPath: string
): Promise<string[]> => {
  if (!(await exists(repoPath))) return []
  if (!await isGitRepo(repoPath)) return []
  try {
    const repo = git(repoPath)
    const branches = await repo.branch(['-r'])
    return branches.all
  } catch {
    return []
  }
}

/**
 * 获取远程仓库的默认分支
 * @param repoUrl 远程仓库地址
 * @returns 默认分支
 */
export const getRemoteDefaultBranch = async (
  repoUrl: string
): Promise<string | null> => {
  try {
    const repo = git()
    const remoteInfo = await repo.listRemote(['--symref', repoUrl, 'HEAD'])
    const defaultBranchMatch = remoteInfo.match(/^ref: refs\/heads\/([^\t\n]+)/m)
    return defaultBranchMatch ? defaultBranchMatch[1] : null
  } catch {
    return null
  }
}
