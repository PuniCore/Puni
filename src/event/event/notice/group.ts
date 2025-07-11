import { NoticeBase } from '@puni/event/event/notice/base'
import {
  GroupAdminChangedOptions,
  GroupCardChangedOptions,
  GroupFileUploadedOptions,
  GroupHlightsChangedOptions,
  GroupHonorChangedOptions,
  GroupLuckKingOptions,
  GroupMemberBanOptions,
  GroupMemberDecreaseOptions,
  GroupMemberIncreaseOptions,
  GroupMemberUniqueTitleChangedOptions,
  GroupMessageReactionOptions,
  GroupPokeOptions,
  GroupRecallOptions,
  GroupSignInOptions,
  GroupWholeBanOptions,
  NoticeEventSub
} from '@puni/types/event'

/**
 * @description 群聊事件基类
 */
export class GroupNotice extends NoticeBase {
  get groupId () {
    return this.contact.peer
  }
}

/**
 * @description 收到群聊戳一戳事件
 * @class GroupPokeNotice
 */
export class GroupPokeNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupPoke
  #contact: GroupPokeOptions['contact']
  #sender: GroupPokeOptions['sender']
  content: GroupPokeOptions['content']

  constructor (options: GroupPokeOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupPoke as const }))

    this.#subEvent = NoticeEventSub.GroupPoke
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
 * @description 收到群聊撤回事件
 * @class GroupRecallNotice
 */
export class GroupRecallNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupRecall
  #contact: GroupRecallOptions['contact']
  #sender: GroupRecallOptions['sender']
  content: GroupRecallOptions['content']

  constructor (options: GroupRecallOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupRecall as const }))

    this.#subEvent = NoticeEventSub.GroupRecall
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
 * @description 收到群聊文件上传事件
 * @class GroupFileUploadedNotice
 */
export class GroupFileUploadedNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupFileUploaded
  #contact: GroupFileUploadedOptions['contact']
  #sender: GroupFileUploadedOptions['sender']
  content: GroupFileUploadedOptions['content']

  constructor (options: GroupFileUploadedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupFileUploaded as const }))

    this.#subEvent = NoticeEventSub.GroupFileUploaded
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
 * @description 群名片变动事件
 * @class GroupCardChangedNotice
 */
export class GroupCardChangedNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupCardChanged
  #contact: GroupCardChangedOptions['contact']
  #sender: GroupCardChangedOptions['sender']
  content: GroupCardChangedOptions['content']

  constructor (options: GroupCardChangedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupCardChanged as const }))

    this.#subEvent = NoticeEventSub.GroupCardChanged
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
 * @description 群成员头衔变动事件
 * @class GroupMemberTitleUpdatedNotice
 */
export class GroupMemberTitleUpdatedNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupMemberTitleUpdate
  #contact: GroupMemberUniqueTitleChangedOptions['contact']
  #sender: GroupMemberUniqueTitleChangedOptions['sender']
  content: GroupMemberUniqueTitleChangedOptions['content']

  constructor (options: GroupMemberUniqueTitleChangedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupMemberTitleUpdate as const }))

    this.#subEvent = NoticeEventSub.GroupMemberTitleUpdate
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
 * @description 群精华消息变动事件
 * @class GroupHlightsChangedNotice
 */
export class GroupHlightsChangedNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupHighlightsChange
  #contact: GroupHlightsChangedOptions['contact']
  #sender: GroupHlightsChangedOptions['sender']
  content: GroupHlightsChangedOptions['content']

  constructor (options: GroupHlightsChangedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupHighlightsChange as const }))

    this.#subEvent = NoticeEventSub.GroupHighlightsChange
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
 * @description 群成员增加事件
 * @class GroupMemberIncreaseNotice
 */
export class GroupMemberIncreaseNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupMemberAdd
  #contact: GroupMemberIncreaseOptions['contact']
  #sender: GroupMemberIncreaseOptions['sender']
  content: GroupMemberIncreaseOptions['content']

  constructor (options: GroupMemberIncreaseOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupMemberAdd as const }))

    this.#subEvent = NoticeEventSub.GroupMemberAdd
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
 * @description 群成员减少事件
 * @class GroupMemberDecreaseNotice
 */
export class GroupMemberDecreaseNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupMemberRemove
  #contact: GroupMemberDecreaseOptions['contact']
  #sender: GroupMemberDecreaseOptions['sender']
  content: GroupMemberDecreaseOptions['content']

  constructor (options: GroupMemberDecreaseOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupMemberRemove as const }))

    this.#subEvent = NoticeEventSub.GroupMemberRemove
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
 * @description 群管理员变动事件
 * @class GroupAdminChangedNotice
 */
export class GroupAdminChangedNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupAdminChanged
  #contact: GroupAdminChangedOptions['contact']
  #sender: GroupAdminChangedOptions['sender']
  content: GroupAdminChangedOptions['content']

  constructor (options: GroupAdminChangedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupAdminChanged as const }))

    this.#subEvent = NoticeEventSub.GroupAdminChanged
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
 * @description 群打卡事件
 * @class GroupSignInNotice
 */
export class GroupSignInNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupSignIn
  #contact: GroupSignInOptions['contact']
  #sender: GroupSignInOptions['sender']
  content: GroupSignInOptions['content']

  constructor (options: GroupSignInOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupSignIn as const }))

    this.#subEvent = NoticeEventSub.GroupSignIn
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
 * @description 群成员被禁言事件
 * @class GroupMemberBanNotice
 */
export class GroupMemberBanNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupMemberBan
  #contact: GroupMemberBanOptions['contact']
  #sender: GroupMemberBanOptions['sender']
  content: GroupMemberBanOptions['content']

  constructor (options: GroupMemberBanOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupMemberBan as const }))

    this.#subEvent = NoticeEventSub.GroupMemberBan
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
 * @description 群全员禁言事件
 * @class GroupWholeBanNotice
 */
export class GroupWholeBanNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupWholeBan
  #contact: GroupWholeBanOptions['contact']
  #sender: GroupWholeBanOptions['sender']
  content: GroupWholeBanOptions['content']

  constructor (options: GroupWholeBanOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupWholeBan as const }))

    this.#subEvent = NoticeEventSub.GroupWholeBan
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
 * @description 群表情动态事件
 * @class GroupMessageReactionNotice
 */
export class GroupMessageReactionNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupMessageReaction
  #contact: GroupMessageReactionOptions['contact']
  #sender: GroupMessageReactionOptions['sender']
  content: GroupMessageReactionOptions['content']

  constructor (options: GroupMessageReactionOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupMessageReaction as const }))

    this.#subEvent = NoticeEventSub.GroupMessageReaction
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
 * @description 群聊运气王事件
 * @class GroupLuckKingNotice
 */
export class GroupLuckKingNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupLuckyKing
  #contact: GroupLuckKingOptions['contact']
  #sender: GroupLuckKingOptions['sender']
  content: GroupLuckKingOptions['content']

  constructor (options: GroupLuckKingOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupLuckyKing as const }))

    this.#subEvent = NoticeEventSub.GroupLuckyKing
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
 * @description 群聊荣誉变更事件
 * @class GroupHonorChangedNotice
 */
export class GroupHonorChangedNotice extends GroupNotice {
  #subEvent: NoticeEventSub.GroupHonorChanged
  #contact: GroupHonorChangedOptions['contact']
  #sender: GroupHonorChangedOptions['sender']
  content: GroupHonorChangedOptions['content']

  constructor (options: GroupHonorChangedOptions) {
    super(Object.assign(options, { subEvent: NoticeEventSub.GroupHonorChanged as const }))

    this.#subEvent = NoticeEventSub.GroupHonorChanged
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
