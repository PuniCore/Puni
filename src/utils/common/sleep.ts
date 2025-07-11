import { sleep as se } from 'radash'

/**
 * 休眠函数
 * @param ms 毫秒
 * @example
 * ```ts
 * await sleep(1000)
 * -> 等待1秒
 * ```
 */
export const sleep = async (ms: number): Promise<unknown> => {
  return await se(ms)
}
