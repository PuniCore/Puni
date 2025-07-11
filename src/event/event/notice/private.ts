import { NoticeBase } from '@puni/event/event/notice/base'
import { NoticeEventSub, PrivateFileUploadedOptions, PrivatePokeOptions, PrivateRecallOptions } from '@puni/types/event'

/**
 * @description 收到私聊戳一戳事件
 * @class PrivatePokeNotice
 */
export class PrivatePokeNotice extends NoticeBase {
  #subEvent: NoticeEventSub.FriendPoke
  #contact: PrivatePokeOptions['contact']
  #sender: PrivatePokeOptions['sender']
  content: PrivatePokeOptions['content']

  constructor (options: PrivatePokeOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.FriendPoke as const }))

    this.#subEvent = NoticeEventSub.FriendPoke
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
 * @description 收到私聊撤回事件
 * @class PrivateRecallNotice
 */
export class PrivateRecallNotice extends NoticeBase {
  #subEvent: NoticeEventSub.PrivateRecall
  #contact: PrivateRecallOptions['contact']
  #sender: PrivateRecallOptions['sender']
  content: PrivateRecallOptions['content']

  constructor (options: PrivateRecallOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.PrivateRecall as const }))

    this.#subEvent = NoticeEventSub.PrivateRecall
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
 * @description 收到私聊文件上传事件
 * @class PrivateFileUploadedNotice
 */
export class PrivateFileUploadedNotice extends NoticeBase {
  #subEvent: NoticeEventSub.PrivateFileUploaded
  #contact: PrivateFileUploadedOptions['contact']
  #sender: PrivateFileUploadedOptions['sender']
  content: PrivateFileUploadedOptions['content']

  constructor (options: PrivateFileUploadedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.PrivateFileUploaded as const }))

    this.#subEvent = NoticeEventSub.PrivateFileUploaded
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
