import { RequestBase } from '@puni/event/event/request/base'
import { PrivateApplyRequestOptions, RequestEventSub } from '@puni/types/event'

/**
 * @description 创建好友申请请求事件
 * @class ReceiveLikeNotice
 */
export class PrivateApplyRequest extends RequestBase {
  #subEvent: RequestEventSub.FriendApply
  #contact: PrivateApplyRequestOptions['contact']
  #sender: PrivateApplyRequestOptions['sender']
  content: PrivateApplyRequestOptions['content']

  constructor (options: PrivateApplyRequestOptions) {
    super(Object.assign(options, { subEvent: RequestEventSub.FriendApply }))

    this.#subEvent = RequestEventSub.FriendApply
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
