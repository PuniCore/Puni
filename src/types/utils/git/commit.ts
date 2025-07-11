export interface GitCommitInfo {
  /** 分支名称 */
  branch: string | null
  /** 短哈希 */
  short: string
  /** 长哈希 */
  hash: string
}
