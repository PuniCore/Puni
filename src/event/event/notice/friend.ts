import { NoticeBase } from '@puni/event/event/notice/base'
import { FriendDecreaseOptions, FriendIncreaseOptions, NoticeEventSub } from '@puni/types/event'

/**
 * @description 好友增加事件
 * @class FriendIncreaseNotice
 */
export class FriendIncreaseNotice extends NoticeBase {
  #subEvent: NoticeEventSub.FriendIncrease
  #contact: FriendIncreaseOptions['contact']
  #sender: FriendIncreaseOptions['sender']
  content: FriendIncreaseOptions['content']

  constructor (options: FriendIncreaseOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.FriendIncrease as const }))

    this.#subEvent = NoticeEventSub.FriendIncrease
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

/**
 * @description 好友减少事件
 * @class FriendDecreaseNotice
 */
export class FriendDecreaseNotice extends NoticeBase {
  #subEvent: NoticeEventSub.FriendDecrease
  #contact: FriendDecreaseOptions['contact']
  #sender: FriendDecreaseOptions['sender']
  content: FriendDecreaseOptions['content']

  constructor (options: FriendDecreaseOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.FriendDecrease as const }))

    this.#subEvent = NoticeEventSub.FriendDecrease
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
