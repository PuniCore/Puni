import path from 'node:path'

import { logger } from '@puni/service/logger'
import dotenv from 'dotenv'
const start = async () => {
  dotenv.config({ path: `${path.join(process.cwd(), '.env')}` })
  logger.info('启动中...')
}

await start()
export * from '@puni/types'
