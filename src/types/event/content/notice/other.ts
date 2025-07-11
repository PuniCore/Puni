/** 通知事件: 收到点赞 */
export interface ReceiveLikeType {
  /** 点赞者id */
  operatorId: string
  /** 点赞者数量 */
  count: number
}

/** 通知事件: 私聊戳一戳 */
export interface PrivatePokeType {
  /** 操作者id */
  operatorId: string
  /** 被戳者id */
  targetId: string
  /** 操作名称，如“戳了戳” */
  action: string
  /** 后缀，未设置则未空字符串 */
  suffix: string
  /** 操作图标url */
  actionImage: string
}

/** 通知事件: 私聊撤回消息 */
export interface PrivateRecallType {
  /** 操作者id */
  operatorId: string
  /** 撤回的消息id */
  messageId: string
  /** 操作提示，如“撤回了一条消息”  一般此项为空字符串 */
  tips: string
}

/**
 * 通知事件: 私聊文件上传
 * 文件信息最少需要提供一个url
 */
export interface PrivateFileUploadedType {
  /** 操作者id */
  operatorId: string
  /** 文件ID 此项没有则为空字符串 */
  fid: string
  /** 文件子ID 此项没有则为0 */
  subId: number
  /** 文件名 此项没有则为空字符串 */
  name: string
  /** 文件大小 此项没有则为0 */
  size: number
  /** 过期时间 此项没有则为0 */
  expireTime: number
  /** 文件URL */
  url: () => Promise<string>
}
