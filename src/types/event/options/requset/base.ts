import type { BaseEventOptions, EventParent } from '@puni/types/event/options/base'

/** 创建请求事件类所需参数类型 */
export type RequestOptions = Omit<BaseEventOptions<EventParent.Request>, 'event'> & {
  /** 请求内容 */
  content: any
}
