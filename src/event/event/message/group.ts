import { MessageBase } from '@puni/event/event/message/base'
import {
  GroupMessageOptions,
  GroupTempMessageOptions,
  MessageEventSub
} from '@puni/types/event'

/**
 * @description 群消息事件类
 * @class GroupMessage
 */
export class GroupMessage extends MessageBase {
  #subEvent: MessageEventSub.Group
  #contact: GroupMessageOptions['contact']
  #sender: GroupMessageOptions['sender']

  constructor (options: GroupMessageOptions) {
    super(Object.assign(options, { subEvent: MessageEventSub.Group }))
    this.#subEvent = MessageEventSub.Group
    this.#contact = options.contact
    this.#sender = options.sender
  }

  /**
   * @description 群ID
   * @deprecated 即将废弃 请使用 `groupId`
   */
  get group_id () {
    return this.groupId
  }

  /**
   * @description 群ID
   */
  get groupId () {
    return this.contact.peer
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

  get isPrivate (): false {
    return false
  }

  get isFriend (): false {
    return false
  }

  get isGroup (): true {
    return true
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

/**
 * @description 群临时会话消息事件类
 * @class GroupTempMessage
 */
export class GroupTempMessage extends MessageBase {
  #subEvent: MessageEventSub.GroupTemp
  #contact: GroupTempMessageOptions['contact']
  #sender: GroupTempMessageOptions['sender']

  constructor (options: GroupTempMessageOptions) {
    super(Object.assign(options, { subEvent: MessageEventSub.GroupTemp as const }))
    this.#subEvent = MessageEventSub.GroupTemp
    this.#contact = options.contact
    this.#sender = options.sender
  }

  /**
   * @description 群ID
   * @deprecated 即将废弃 请使用 `groupId`
   */
  get group_id () {
    return this.groupId
  }

  /**
   * @description 群ID
   */
  get groupId () {
    return this.contact.peer
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

  get isPrivate (): false {
    return false
  }

  get isFriend (): false {
    return false
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

  get isGroupTemp (): true {
    return true
  }
}
