import { BaseEvent } from '@puni/event/base'
import {
  EventParent,
  MessageEventSub,
  MessageOptions
} from '@puni/types/event'
import type { Elements } from '@puni/types/service/message/segment'

/**
 * @description 消息事件基类
 * @class FriendMessage
 */
export abstract class MessageBase extends BaseEvent<EventParent.Message> {
  #event: EventParent.Message
  #subEvent: MessageEventSub
  #messageId: string
  #messageSeq: number

  /** 消息段 */
  public elements: Elements[]
  /** 消息文本 */
  public msg: string
  /** 别名 */
  public alias: string
  /** 消息日志 */
  public rawMessage: string

  constructor ({
    subEvent,
    eventId,
    rawEvent,
    time,
    contact,
    sender,
    srcReply,
    bot,
    messageId,
    messageSeq,
    elements
  }: MessageOptions) {
    super({
      subEvent,
      eventId,
      rawEvent,
      time,
      contact,
      sender,
      srcReply,
      bot,
      event: EventParent.Message
    })

    this.#event = EventParent.Message
    this.#subEvent = subEvent
    this.#messageId = messageId
    this.#messageSeq = messageSeq
    this.elements = elements

    this.msg = ''
    this.alias = ''
    this.rawMessage = ''
  }

  get event () {
    return this.#event
  }

  get subEvent () {
    return this.#subEvent
  }

  get messageId () {
    return this.#messageId
  }

  get messageSeq () {
    return this.#messageSeq
  }

  get at () {
    return this.elements
      .filter(element => element.type === 'at')
      .map(element => element.targetId)
      .filter(Boolean)
  }

  get atBot () {
    return this.at.includes(this.selfId)
  }

  get atAll () {
    return this.at.includes('all')
  }

  get image () {
    return this.elements
      .filter(element => element.type === 'image')
      .map(element => element.file)
      .filter(Boolean)
  }

  get record () {
    const record = this.elements.find(element => element.type === 'record')
    return record ? record.file : ''
  }

  get replyId () {
    const reply = this.elements.find(element => element.type === 'reply')
    return reply ? reply.messageId : ''
  }
}
