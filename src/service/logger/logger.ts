import { puniPathLogs } from '@puni/root'
import { createLogger, Logger } from '@punicore/logger'

/**
 * @public
 * @description 日志管理器
 */
export const logger: Logger = createLogger(
  {
    level: 'info',
    FileLogging: true,
    daysToKeep: 14,
    logPath: puniPathLogs
  }
)
