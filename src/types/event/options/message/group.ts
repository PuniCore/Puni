import type { Contact, Scene } from '@puni/types/event/contact'
import type { MessageOptions } from '@puni/types/event/options/message/base'
import type { Sender } from '@puni/types/event/sender'

/** 创建群消息事件所需参数类型 */
export type GroupMessageOptions = Omit<
  MessageOptions,
  'subEvent' | 'contact' | 'sender'
> & {
  /** 事件来源群信息 */
  contact: Contact<Scene.Group>
  /** 群发送者信息 */
  sender: Sender<Scene.Group>
}

/** 创建群临时会话消息事件所需参数类型 */
export type GroupTempMessageOptions = Omit<
  MessageOptions,
  'subEvent' | 'contact' | 'sender'
> & {
  /** 事件来源群临时会话信息 */
  contact: Contact<Scene.GroupTemp>
  /** 群临时会话发送者信息 */
  sender: Sender<Scene.GroupTemp>
}
