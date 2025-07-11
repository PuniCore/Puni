import type { AdapterType } from '@puni/types/adapter'
import type { Contact } from '@puni/types/event/contact'
import type { SrcReply } from '@puni/types/event/reply'
import type { Sender } from '@puni/types/event/sender'

/**
 * 事件父类型
 */
export enum EventParent {
  /** 消息事件 */
  Message = 'message',
  /** 通知事件 */
  Notice = 'notice',
  /** 请求事件 */
  Request = 'request'
}

/**
 * `消息`事件子类型
 */
export enum MessageEventSub {
  /** 群消息 */
  Group = 'group',
  /** 好友消息 */
  Friend = 'friend',
  /** 频道消息 */
  Guild = 'guild',
  /** 频道私信 */
  GuildDirect = 'guildDirect',
  /** 群临时会话 */
  GroupTemp = 'groupTemp'
}

/**
 * `通知`事件子类型
 */
export enum NoticeEventSub {
  /** 收到点赞 */
  ReceiveLike = 'receiveLike',
  /** 好友戳一戳 */
  FriendPoke = 'friendPoke',
  /** 好友撤回消息 */
  PrivateRecall = 'privateRecall',
  /** 好友发送文件 */
  PrivateFileUploaded = 'privateFileUploaded',
  /** 好友增加 */
  FriendIncrease = 'friendIncrease',
  /** 好友减少 */
  FriendDecrease = 'friendDecrease',
  /** 群聊戳一戳 */
  GroupPoke = 'groupPoke',
  /** 群聊名片变动 */
  GroupCardChanged = 'groupCardChanged',
  /** 群聊成员头衔变动 */
  GroupMemberTitleUpdate = 'groupMemberTitleUpdate',
  /** 群聊精华消息变动 */
  GroupHighlightsChange = 'groupHighlightsChange',
  /** 群聊撤回消息 */
  GroupRecall = 'groupRecall',
  /** 群聊成员增加 */
  GroupMemberAdd = 'groupMemberAdd',
  /** 群聊成员减少 */
  GroupMemberRemove = 'groupMemberRemove',
  /** 群聊管理员变动 */
  GroupAdminChanged = 'groupAdminChanged',
  /** 群聊成员禁言 */
  GroupMemberBan = 'groupMemberBan',
  /** 群聊签到 */
  GroupSignIn = 'groupSignIn',
  /** 群聊全员禁言 */
  GroupWholeBan = 'groupWholeBan',
  /** 群聊发送文件 */
  GroupFileUploaded = 'groupFileUploaded',
  /** 群聊消息表情动态回应 */
  GroupMessageReaction = 'groupMessageReaction',
  /** 群聊运气王事件 */
  GroupLuckyKing = 'groupLuckyKing',
  /** 群聊荣誉变更事件 */
  GroupHonorChanged = 'groupHonorChange',
}

/**
 * `请求`事件子类型
 */
export enum RequestEventSub {
  /** 收到添加Bot为好友请求 */
  FriendApply = 'friendApply',
  /** 收到用户申请加入群聊请求 */
  GroupApply = 'groupApply',
  /** 收到邀请Bot加入群聊请求 */
  GroupInvite = 'groupInvite'
}

/**
 * 事件父类型与子类型的映射
 */
export interface EventToSubEvent {
  message: MessageEventSub
  notice: NoticeEventSub
  request: RequestEventSub
}

/**
 * 事件基类定义
 * @description 所有的事件都拥有这些基本属性
 */
export interface BaseEventType<T extends EventParent> {
  /** 机器人ID */
  selfId: string
  /** 用户ID */
  userId: string
  /** 事件类型 */
  event: T
  /** 事件子类型 */
  subEvent: EventToSubEvent[T]
  /** 事件ID */
  eventId: string
  /** 原始事件 */
  rawEvent: any
  /** 事件触发时间戳 */
  time: number
  /** 事件联系人信息 */
  contact: Contact
  /** 事件发送者信息 */
  sender: Sender
  /** 快速回复源函数 适配器实现 */
  srcReply: SrcReply
  /** bot自身实例 所有标准Api都通过这里调用 */
  bot: AdapterType
}

/** 事件基类参数 */
export type BaseEventOptions<T extends EventParent> = Omit<BaseEventType<T>, 'userId' | 'selfId'>
