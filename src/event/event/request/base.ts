import { BaseEvent } from '@puni/event/base'
import { EventParent, RequestEventSub, RequestOptions } from '@puni/types/event'
/**
 * @description 请求事件基类
 * @class RequestBase
 */
export abstract class RequestBase extends BaseEvent<EventParent.Request> {
  #event: EventParent.Request
  #subEvent: RequestEventSub
  /** 通知内容str */
  tips: string
  /** 事件内容 */
  content: unknown

  constructor ({
    subEvent,
    eventId,
    rawEvent,
    time,
    contact,
    sender,
    srcReply,
    bot
  }: RequestOptions) {
    super({
      subEvent,
      eventId,
      rawEvent,
      time,
      contact,
      sender,
      srcReply,
      bot,
      event: EventParent.Request
    })

    this.#event = EventParent.Request
    this.#subEvent = subEvent

    this.tips = ''
  }

  get event () {
    return this.#event
  }

  get subEvent () {
    return this.#subEvent
  }
}
