import { RequestBase } from '@puni/event/event/request/base'
import { GroupApplyRequestOptions, GroupInviteRequestOptions, RequestEventSub } from '@puni/types/event'
/**
 * @description 创建入群请求事件
 * @class ReceiveLikeNotice
 */
export class GroupApplyRequest extends RequestBase {
  #subEvent: RequestEventSub.GroupApply
  #contact: GroupApplyRequestOptions['contact']
  #sender: GroupApplyRequestOptions['sender']
  content: GroupApplyRequestOptions['content']

  constructor (options: GroupApplyRequestOptions) {
    super(Object.assign(options, { subEvent: RequestEventSub.GroupApply }))

    this.#subEvent = RequestEventSub.GroupApply
    this.#contact = options.contact
    this.#sender = options.sender
    this.content = options.content
  }

  get groupId () {
    return this.contact.peer
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
 * @description 创建邀请Bot入群请求事件
 * @class GroupInviteRequest
 */
export class GroupInviteRequest extends RequestBase {
  #subEvent: RequestEventSub.GroupInvite
  #contact: GroupInviteRequestOptions['contact']
  #sender: GroupInviteRequestOptions['sender']
  content: GroupInviteRequestOptions['content']

  constructor (options: GroupInviteRequestOptions) {
    super(Object.assign(options, { subEvent: RequestEventSub.GroupInvite }))

    this.#subEvent = RequestEventSub.GroupInvite
    this.#contact = options.contact
    this.#sender = options.sender
    this.content = options.content
  }

  /**
   * @deprecated 已经弃用 请使用`groupId`
   */
  get group_id () {
    return this.contact.peer
  }

  get groupId () {
    return this.contact.peer
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
