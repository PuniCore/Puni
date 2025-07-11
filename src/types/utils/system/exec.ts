import type { exec, ExecException } from 'child_process'
/**
 * 执行 shell 命令返回类型
 */
export interface ExecType {
  /** 是否执行成功 */
  status: boolean
  /** 错误对象，如果命令执行失败则包含错误信息 */
  error: ExecException | null
  /** 标准错误输出 */
  stderr: string
  /** 标准输出 */
  stdout: string
}

/**
 * 执行 shell 命令返回类型泛型
 */
export type ExecReturn<K extends boolean> = K extends true ? boolean : ExecType

/**
 * 执行 shell 命令参数
 */
export type ExecOptions<T extends boolean> = Parameters<typeof exec>[1] & {
  /** 是否打印日志 默认不打印 */
  log?: boolean
  /** 是否只返回布尔值 表示命令是否成功执行 优先级比抛错误高 */
  booleanResult?: T
  /** 是否去除日志中的换行符 默认不去除 */
  trim?: boolean
}
