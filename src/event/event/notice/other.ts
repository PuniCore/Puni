import { NoticeBase } from '@puni/event/event/notice/base'
import { NoticeEventSub, ReceiveLikeOptions } from '@puni/types/event'

/**
 * @description 收到点赞事件
 * @class ReceiveLikeNotice
 */
export class ReceiveLikeNotice extends NoticeBase {
  #subEvent: NoticeEventSub.ReceiveLike
  #contact: ReceiveLikeOptions['contact']
  #sender: ReceiveLikeOptions['sender']
  content: ReceiveLikeOptions['content']

  constructor (options: ReceiveLikeOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.ReceiveLike as const }))

    this.#subEvent = NoticeEventSub.ReceiveLike
    this.#contact = options.contact
    this.#sender = options.sender
    this.content = options.content
  }

  get subEvent () {
    return this.#subEvent
  }

  get contact () {
    return this.#contact
  }

  get sender () {
    return this.#sender
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
