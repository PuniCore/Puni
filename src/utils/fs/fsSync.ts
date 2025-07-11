import fs from 'node:fs'

import { tryit } from 'radash'

/**
 * 检查目录是否存在
 * @param file 文件路径
 * @returns 返回布尔值
 * @example
 * ```ts
 * const fileExists = existsSync('/path/to/file.txt')
 * console.log(fileExists) // true 或 false
 * ```
 */
export const existsSync = (file: string): boolean => {
  const [err] = tryit(fs.accessSync)(file, fs.constants.F_OK)
  return !err
}

/**
 * 同步递归创建目录
 * @param path - 目录路径
 * @returns 返回是否创建成功
 * @example
 * ```ts
 * console.log(mkdirSync('/path/to/directory')) // true 或 false
 * ```
 */
export const mkdirSync = (path: string): boolean => {
  const [err] = tryit(fs.mkdirSync)(path, { recursive: true })
  return !err
}

/**
 * 检查目录是否存在 不存在则创建
 * @param file 文件路径
 * @returns 返回布尔值， true 表示创建成功，false 表示创建失败或目录已存在
 * @example
 * ```ts
 * console.log(existToMkdirSync('/path/to/directory')) // true 或 false
 * ```
 */
export const existToMkdirSync = (file: string): boolean => {
  if (!existsSync(file)) {
    const [mkdirErr] = tryit(fs.mkdirSync)(file, { recursive: true })
    return !mkdirErr
  }
  return true
}
