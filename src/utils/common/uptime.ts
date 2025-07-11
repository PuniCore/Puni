import { loadLocale } from '@puni/utils/common/locale'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

await loadLocale()
dayjs.extend(duration)

/**
 * 获取Puni运行时间
 * @example
 * ```ts
 * uptime()
 * // -> '1天2小时3分钟4秒'
 * // -> '2小时3分钟4秒'
 * // -> '3分钟4秒'
 * // -> '4秒'
 * ```
 */
export const uptime = () => {
  const dur = dayjs.duration(process.uptime(), 'seconds')
  return [
    dur.days() && `${dur.days()}天`,
    dur.hours() && `${dur.hours()}小时`,
    dur.minutes() && `${dur.minutes()}分钟`,
    dur.seconds() && `${dur.seconds()}秒`
  ].filter(Boolean).join('')
}
