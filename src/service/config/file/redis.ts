import { puniPathConfig } from '@puni/root'
import type { Redis } from '@puni/types/service/config/redis'
import { requireFileSync } from '@puni/utils/fs/require'

/** redis配置 */
export const redis = () => requireFileSync<Redis>(`${puniPathConfig}/redis.json`, { ex: 30 })
