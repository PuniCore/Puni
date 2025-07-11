import type { Contact, Scene } from '@puni/types/event/contact'
import type {
  GroupAdminChangedType,
  GroupCardChangedType,
  GroupFileUploadedType,
  GroupHlightsChangedType,
  GroupHonorChangedType,
  GroupLuckKingType,
  GroupMemberBanType,
  GroupMemberDecreaseType,
  GroupMemberIncreaseType,
  GroupMemberUniqueTitleChangedType,
  GroupMessageReactionType,
  GroupPokeType,
  GroupRecallType,
  GroupSignInType,
  GroupWholeBanType
} from '@puni/types/event/content'
import type { NoticeOptions } from '@puni/types/event/options/notice/base'

/** 创建群聊戳一戳通知事件 */
export type GroupPokeOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupPokeType
}

/** 创建群聊撤回通知事件 */
export type GroupRecallOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupRecallType
}

/** 创建群聊文件上传通知事件 */
export type GroupFileUploadedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupFileUploadedType
}

/** 创建群名片变动通知事件 */
export type GroupCardChangedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupCardChangedType
}

/** 创建群成员头衔变动通知事件 */
export type GroupMemberUniqueTitleChangedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupMemberUniqueTitleChangedType
}

/** 创建群精华消息变动通知事件 */
export type GroupHlightsChangedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupHlightsChangedType
}

/** 创建群成员增加通知事件 */
export type GroupMemberIncreaseOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupMemberIncreaseType
}

/** 创建群成员减少通知事件 */
export type GroupMemberDecreaseOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupMemberDecreaseType
}

/** 创建群管理员变动通知事件 */
export type GroupAdminChangedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupAdminChangedType
}

/** 创建群打卡通知事件 */
export type GroupSignInOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupSignInType
}

/** 创建群成员被禁言通知事件 */
export type GroupMemberBanOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupMemberBanType
}

/** 创建群全员禁言通知事件 */
export type GroupWholeBanOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupWholeBanType
}

/** 创建群表情动态通知事件 */
export type GroupMessageReactionOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupMessageReactionType
}

/** 创建群聊运气王通知事件 */
export type GroupLuckKingOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupLuckKingType
}

/** 创建群聊荣誉变更通知事件 */
export type GroupHonorChangedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupHonorChangedType
}
