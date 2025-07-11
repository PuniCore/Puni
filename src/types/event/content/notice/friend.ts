/** 通知事件: 新增好友 */
export interface FriendIncreaseType {
  /** 新好友id */
  targetId: string
}

/** 通知事件: 好友减少 */
export interface FriendDecreaseType {
  /** 减少的好友id */
  targetId: string
}
