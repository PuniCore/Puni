import { MessageBase } from '@puni/event/event/message/base'
import {
  GuildDirectMessageOptions,
  GuildMessageOptions,
  MessageEventSub
} from '@puni/types/event'

/**
 * @description 频道私信消息事件类
 * @class DirectMessage
 */
export class GuildDirectMessage extends MessageBase {
  #subEvent: MessageEventSub.GuildDirect
  #contact: GuildDirectMessageOptions['contact']
  #sender: GuildDirectMessageOptions['sender']
  #srcGuildId: GuildDirectMessageOptions['srcGuildId']

  constructor (options: GuildDirectMessageOptions) {
    super(Object.assign(options, { subEvent: MessageEventSub.GuildDirect as const }))
    this.#subEvent = MessageEventSub.GuildDirect
    this.#sender = options.sender
    this.#contact = options.contact
    this.#srcGuildId = options.srcGuildId
  }

  /** 来源频道id */
  get srcGuildId () {
    return this.#srcGuildId
  }

  get guildId () {
    return this.#contact.peer
  }

  get channelId () {
    return this.#contact.subPeer
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

  get isFriend (): false {
    return false
  }

  get isGroup (): false {
    return false
  }

  get isGuild (): false {
    return false
  }

  get isDirect (): true {
    return true
  }

  get isGroupTemp (): false {
    return false
  }
}

/**
 * @description 频道消息事件类
 * @class GuildMessage
 */
export class GuildMessage extends MessageBase {
  #subEvent: MessageEventSub.Guild
  #contact: GuildMessageOptions['contact']
  #sender: GuildMessageOptions['sender']

  constructor (options: GuildMessageOptions) {
    super(Object.assign(options, { subEvent: MessageEventSub.Guild as const }))
    this.#subEvent = MessageEventSub.Guild
    this.#contact = options.contact
    this.#sender = options.sender
  }

  /**
   * @description 频道ID
   */
  get guildId () {
    return this.#contact.peer
  }

  /**
   * @description 子频道ID
   */
  get channelId () {
    return this.#contact.subPeer
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

  get isGuild (): true {
    return true
  }

  get isDirect (): false {
    return false
  }

  get isGroupTemp (): false {
    return false
  }
}
