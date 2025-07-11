import { MessageBase } from '@puni/event/event/message/base'
import {
  FriendMessageOptions,
  MessageEventSub
} from '@puni/types/event'
/**
 * @description 好友消息事件类
 * @class FriendMessage
 */
export class FriendMessage extends MessageBase {
  #subEvent: MessageEventSub.Friend
  #contact: FriendMessageOptions['contact']
  #sender: FriendMessageOptions['sender']

  constructor (options: FriendMessageOptions) {
    super(Object.assign(options, { subEvent: MessageEventSub.Friend as const }))
    this.#subEvent = MessageEventSub.Friend
    this.#contact = options.contact
    this.#sender = options.sender
  }

  get contact () {
    return this.#contact
  }

  get sender () {
    return this.#sender
  }

  get subEvent () {
    return this.#subEvent
  }

  get isPrivate (): true {
    return true
  }

  get isFriend (): true {
    return true
  }

  get isGroup (): false {
    return false
  }

  get isGuild (): false {
    return false
  }

  get isDirect (): false {
    return false
  }

  get isGroupTemp (): false {
    return false
  }
}
