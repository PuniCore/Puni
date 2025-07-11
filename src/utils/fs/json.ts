import fs from 'node:fs'

import { JsonData } from '@puni/types'
import { tryit } from 'radash'

/**
 * 同步读取 JSON 文件
 * @param file 文件路径
 * @return 返回解析后的 JSON 对象
 * @throws 如果文件读取失败或 JSON 解析失败，则返回null
 * @example
 * ```ts
 * const json = readJsonSync('path/to/file.json')
 * console.log(json) // 输出解析后的 JSON 对象
 * ```
 */
export const readJsonSync = (file: string): JsonData => {
  try {
    const data = fs.readFileSync(file, 'utf8')
    const jsonData = JSON.parse(data)
    return {
      success: true,
      data: jsonData
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: (error as Error).message
    }
  }
}

/**
 * 同步写入 JSON 文件
 * @param file 文件路径
 * @param data 要写入的 JSON 数据
 * @return 返回是否写入成功
 * @example
 * ```ts
 * const success = writeJsonSync('path/to/file.json', { key: 'value' })
 * console.log(success) // 输出 true 或 false
 * ```
 */
export const writeJsonSync = (file: string, data: any): boolean => {
  const [err] = tryit(fs.writeFileSync)(file, JSON.stringify(data, null, 2), 'utf-8')
  return !err
}

/**
 * 异步读取 JSON 文件
 * @param file 文件路径
 * @return 返回解析后的 JSON 对象
 * @throws 如果文件读取失败或 JSON 解析失败，将抛出错误
 * @example
 * ```ts
 * const json = readJson('path/to/file.json')
 * console.log(json) // 输出解析后的 JSON 对象
 * ```
 */
export const readJson = async (file: string): Promise<JsonData> => {
  try {
    const data = await fs.promises.readFile(file, 'utf8')
    const jsonData = JSON.parse(data)
    return {
      success: true,
      data: jsonData
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: (error as Error).message
    }
  }
}

/**
 * 异步写入 JSON 文件
 * @param file 文件路径
 * @param data 要写入的数据
 * @returns 返回写入结果, 如果成功返回 true, 失败返回 false
 * @example
 * ```ts
 * import { writeJson } from '@puni'
 * const result = await writeJson('path/to/file.json', { name: 'John Doe' })
 * console.log(result) // true 或 false
 * ```
 */

export const writeJson = async (file: string, data: any): Promise<boolean> => {
  const [err] = await tryit(fs.promises.writeFile)(file, JSON.stringify(data, null, 2), 'utf-8')
  return !err
}

/** JSON 文件操作 */
export const json = {
  /** 同步读取 */
  readSync: readJsonSync,
  /** 同步写入 */
  writeSync: writeJsonSync,
  /** 异步读取 */
  read: readJson,
  /** 异步写入 */
  write: writeJson
}
