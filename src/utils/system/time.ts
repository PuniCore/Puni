import { loadLocale } from '@puni/utils/common/locale'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

await loadLocale()
dayjs.extend(duration)

/**
 * @description 获取两个时间之间的相对时间差
 * @description 传入一个时间戳时，返回与当前时间的差值
 * @description 传入两个时间戳时，返回两者之间的差值
 * @param time - 起始时间（时间戳，支持秒或毫秒）
 * @param time2 - 结束时间（可选，默认为当前时间）
 * @example
 * // 获取10分钟前到现在的时间差
 * formatDuration(Date.now() - 600000)
 * // -> '10分钟'
 *
 * // 计算两个固定时间点的时间差
 * formatDuration(1620000000, 1620864000)
 * // -> '1天'
 *
 */
export const formatDuration = (time: number, time2: number = Date.now()): string => {
  const t1 = dayjs(time.toString().length === 10 ? time * 1000 : time)
  const t2 = dayjs((time2 || Date.now()).toString().length === 10 ? time2 * 1000 : time2)

  const dur = dayjs.duration(t2.diff(t1))

  return [
    { value: dur.days(), unit: '天' },
    { value: dur.hours(), unit: '小时' },
    { value: dur.minutes(), unit: '分钟' },
    { value: dur.seconds(), unit: '秒' }
  ]
    .filter(item => item.value > 0)
    .map(item => `${item.value}${item.unit}`)
    .join('') || '0秒'
}
