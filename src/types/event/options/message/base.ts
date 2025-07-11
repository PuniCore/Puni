import type { BaseEventOptions, EventParent } from '@puni/types/event/options/base'
import type { Elements } from '@puni/types/service/message'

/** 创建消息事件类所需参数类型 */
export type MessageOptions = Omit<BaseEventOptions<EventParent.Message>, 'event'> & {
  /** 消息ID */
  messageId: string
  /** 消息序列号 */
  messageSeq: number
  /** 消息体元素 */
  elements: Elements[]
}
