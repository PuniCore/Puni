import os from 'node:os'

import { exec } from '@candriajs/exec'
import { logger } from '@puni/service/logger'
import { Redis as RedisOptionsType } from '@puni/types/service/config/redis'
import { isWin } from '@puni/utils/system/system'
import Redis from 'redis'

export const create = async (options: RedisOptionsType) => {
  const client = new Redis(options)

  client.on('error', (err) => {
    logger.error('[Redis] 连接错误:', err)
  })

  client.on('connect', () => {
    logger.debug('[Redis] 正在连接...')
  })

  client.on('ready', () => {
    logger.info(`[Redis] ${logger.green('Redis 连接成功')}`)
  })

  client.on('reconnecting', () => {
    logger.debug('[Redis] 正在重新连接...')
  })

  await client.connect()
  return client
}

/**
 * @description 尝试主动拉起 Redis
 * @returns 是否成功
 */
export const start = async () => {
  logger.debug('[Redis] 正在尝试启动 Redis...')

  if (isWin) {
    // tips: windows仅适配 https://github.com/redis-windows/redis-windows 项目
    const service = 'net start Redis'
    return await exec(service, { booleanResult: true })
  }

  const cmd = 'redis-server --save 300 10 --daemonize yes' + await isArm64()
  return await exec(cmd, { booleanResult: true })
}

const isArm64 = async (): Promise<string> => {
  if (os.arch() !== 'arm64') return ''

  /** 提取版本 只有>=6的版本才忽略警告 */
  const { stdout } = await exec('redis-server -v')
  const version = stdout.toString()
  if (!version) return ''

  const RedisVersion = version.match(/v=(\d)./)
  if (RedisVersion && Number(RedisVersion[1]) >= 6) return ' --ignore-warnings ARM64-COW-BUG'
  return ''
}
