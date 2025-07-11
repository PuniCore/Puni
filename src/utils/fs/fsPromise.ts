import fs from 'node:fs'

import { tryit } from 'radash'

/**
 * 异步检查路径文件是否存在
 * @param file 文件路径
 * @returns 返回是否存在, 如果存在返回 true, 不存在返回 false
 * @example
 * ```ts
 * const fileExists = await exists('/path/to/file.txt')
 * console.log(fileExists) // true 或 false
 * ```
 */
export const exists = async (file: string): Promise<boolean> => {
  const [err] = await tryit(fs.promises.access)(file, fs.constants.F_OK)
  return !err
}

/**
 * 异步递归创建目录
 * @param path - 目录路径
 * @returns 返回是否创建成功
 * @example
 * ```ts
 * console.log(await mkdir('/path/to/directory')) // true 或 false
 * ```
 */
export const mkdir = async (path: string): Promise<boolean> => {
  const [err] = await tryit(fs.promises.mkdir)(path, { recursive: true })
  return !err
}

/**
 * 检查目录是否存在 不存在则创建
 * @param file 文件路径
 * @returns 返回布尔值
 *  * @example
 * ```ts
 * console.log(await existToMkdir('/path/to/directory')) // true 或 false
 * ```
 */
export const existToMkdir = async (file: string): Promise<boolean> => {
  if (!await exists(file)) {
    const [mkdirErr] = await tryit(fs.promises.mkdir)(file, { recursive: true })
    return !mkdirErr
  }

  return true
}
