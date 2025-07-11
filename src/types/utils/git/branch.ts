export interface GitBranchInfo {
  /** 默认分支 */
  defaultBranch: string | null
  /** 本地分支列表 */
  branches: string[]
}
