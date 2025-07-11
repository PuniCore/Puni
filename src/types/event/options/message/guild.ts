import type { Contact, Scene } from '@puni/types/event/contact'
import type { MessageOptions } from '@puni/types/event/options/message/base'
import type { Sender } from '@puni/types/event/sender'

/** 创建频道消息事件所需参数类型 */
export type GuildMessageOptions = Omit<
  MessageOptions,
  'subEvent' | 'contact' | 'sender'
> & {
  /** 事件来源频道信息 */
  contact: Contact<Scene.Guild>
  /** 频道发送者信息 */
  sender: Sender<Scene.Guild>
}

/** 创建频道私信消息事件所需参数类型 */
export type GuildDirectMessageOptions = Omit<
  MessageOptions,
  'subEvent' | 'contact' | 'sender'
> & {
  /** 事件来源频道私信信息 */
  contact: Contact<Scene.GuildDirect>
  /** 频道私信发送者信息 */
  sender: Sender<Scene.GuildDirect>
  /** 来源频道ID */
  srcGuildId: string
}
