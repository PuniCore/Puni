import type {
  FriendMessage,
  GroupMessage,
  GroupTempMessage,
  GuildDirectMessage,
  GuildMessage
} from '@puni/event/event/message'
/** 消息事件对应的对象类型 */
export interface MessageEventMap {
  message: Message
  'message.group': GroupMessage
  'message.friend': FriendMessage
  'message.guild': GuildMessage
  'message.direct': GuildDirectMessage
  'message.groupTemp': GroupTempMessage
}

export type Message = FriendMessage | GroupMessage | GuildDirectMessage | GuildMessage | GroupTempMessage
