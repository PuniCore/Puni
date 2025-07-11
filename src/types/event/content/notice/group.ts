/** 通知事件: 群聊戳一戳 */
export interface GroupPokeType {
  /** 操作者id */
  operatorId: string
  /** 操作名称，如“戳了戳” */
  action: string
  /** 后缀，未设置则未空字符串 */
  suffix: string
  /** 操作图标url */
  actionImage: string
  /** 被戳目标id */
  targetId: string
}

/**
 * 通知事件: 群聊撤回
 * 撤回自己消息时，operator和target为自己
 * 撤回别人消息时，operator为操作者，target为被撤回者
 */
export interface GroupRecallType {
  /** 操作者id */
  operatorId: string
  /** 目标id 撤回自己消息为自己 否则是被撤回者 */
  targetId: string
  /** 撤回的消息id */
  messageId: string
  /** 操作提示，如“撤回了一条消息”  一般此项为空字符串 */
  tip: string
}

/**
 * 通知事件: 群文件上传
 * 文件信息最少需要提供一个url
 */
export interface GroupFileUploadedType {
  /** 文件ID */
  fid: string
  /** 文件子ID */
  subId: number
  /** 文件名 */
  name: string
  /** 文件大小 */
  size: number
  /** 过期时间 */
  expireTime?: number
  /** 文件URL */
  url: () => Promise<string>
}

/** 通知事件: 群名片变动 */
export interface GroupCardChangedType {
  /** 操作者id */
  operatorId: string
  /** 目标id */
  targetId: string
  /** 新名片 */
  newCard: string
}

/** 通知事件: 群成员头衔变动 */
export interface GroupMemberUniqueTitleChangedType {
  /** 目标id */
  targetId: string
  /** 新头衔 */
  title: string
}

/** 通知事件: 群精华消息变动 */
export interface GroupHlightsChangedType {
  /** 操作者id */
  operatorId: string
  /** 发送者id */
  senderId: string
  /** 被操作的消息id */
  messageId: string
  /** 设置、取消精华 */
  isSet: boolean
}

/** 通知事件: 群成员增加 */
export interface GroupMemberIncreaseType {
  /** 操作者id */
  operatorId: string
  /** 加入者id */
  targetId: string
  /** 加入方式 APPROVE:管理员批准 INVITE:管理员邀请 */
  type: 'invite' | 'approve'
}

/** 通知事件: 群成员减少 */
export interface GroupMemberDecreaseType {
  /** 操作者id */
  operatorId: string
  /** 目标id */
  targetId: string
  /** 减少方式 leave:主动退群 kick:成员被踢 kickBot:机器人自身被踢 */
  type: 'leave' | 'kick' | 'kickBot'
}

/** 通知事件: 群管理员变动 */
export interface GroupAdminChangedType {
  /** 目标id */
  targetId: string
  /** 设置、取消管理员 */
  isAdmin: boolean
}

/** 通知事件: 群打卡 */
export interface GroupSignInType {
  /** 目标id */
  targetId: string
  /** 操作名称，如“打卡了” */
  action: string
  /** 打卡图标url */
  rankImage: string
}

/** 通知事件: 群成员被禁言 */
export interface GroupMemberBanType {
  /** 操作者id */
  operatorId: string
  /** 目标id */
  targetId: string
  /** 禁言时长，单位秒 */
  duration: number
  /** 是否为禁言 */
  isBan: boolean
}

/** 通知事件: 群全员禁言 */
export interface GroupWholeBanType {
  /** 操作者id */
  operatorId: string
  /** 是否开启全体禁言 */
  isBan: boolean
}

/** 通知事件: 群表情动态 */
export interface GroupMessageReactionType {
  /** 消息ID */
  messageId: string
  /** 表情ID 参考: https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType */
  faceId: number
  /** 数量 */
  count: number
  /** 添加、取消回应 */
  isSet: boolean
}

/** 通知事件: 群聊运气王 */
export interface GroupLuckKingType {
  /** 红包发送者id */
  userId: string
  /** 运气王id */
  targetId: string
}

/** 通知事件: 群聊荣誉变更事件 */
export interface GroupHonorChangedType {
  /** 荣誉类型，分别表示龙王、群聊之火、快乐源泉 */
  honorType: 'talkative' | 'performer' | 'emotion'
}
