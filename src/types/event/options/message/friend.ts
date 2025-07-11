import type { Contact, Scene } from '@puni/types/event/contact'
import type { MessageOptions } from '@puni/types/event/options/message/base'
import type { Sender } from '@puni/types/event/sender'

/** 创建好友消息事件所需参数类型 */
export type FriendMessageOptions = Omit<
  MessageOptions,
  'subEvent' | 'contact' | 'sender'
> & {
  /** 事件来源好友信息 */
  contact: Contact<Scene.Friend>
  /** 好友发送者信息 */
  sender: Sender<Scene.Friend>
}
