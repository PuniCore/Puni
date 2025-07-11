import dayjs from 'dayjs'

const localeCache = new Set<string>(['en'])

/**
 * 加载语言配置
 * @param locale 语言，如：zh-cn, en
 * @returns 语言配置
 * @example
 * ```
 * await load_locale('zh-cn')
 * ```
 */

export const loadLocale = async (locale: string = 'zh-cn'): Promise<void> => {
  const normalizedLocale = String(locale).toLowerCase()
  if (localeCache.has(normalizedLocale)) {
    dayjs.locale(normalizedLocale)
    return
  }
  await import(`dayjs/locale/${normalizedLocale}.js`)
  dayjs.locale(locale)
}
