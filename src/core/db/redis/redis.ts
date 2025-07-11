import { create, start } from '@puni/core/db/redis/init'
import { redis as redisConfig } from '@puni/service/config/file/redis'
import { logger } from '@puni/service/logger'
import Redis from 'redis'
/**
 * @description Redis数据库
 */
export let redis: Redis
/**
 * @description Redis 服务
 * @returns Redis 客户端
 */
export const createRedis = async (): Promise<Redis> => {
  try {
    const options = redisConfig()
    let client = await create(options)
    if (!client) {
      /** 第一次启动失败 */
      const result = await start()
      if (result) {
        logger.debug(logger.green('[Redis] Redis启动成功'))
        client = await create(options)
      }
      if (!client) {
        throw new Error('Redis 启动失败')
      }
    }
    redis = client
    return redis
  } catch (error) {
    logger.error('[Redis] Redis 连接失败')
    logger.error(error)
    process.exit(1)
  }
}
