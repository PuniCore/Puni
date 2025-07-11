/** 请求事件: 新成员申请加入群聊申请 */
export interface GroupApply {
  /** 申请者id */
  applierId: string
  /** 邀请者id */
  inviterId: string
  /** 申请理由 */
  reason: string
  /** 请求 flag，在调用处理请求的 API 时需要传入 */
  flag: string
  /** 群id */
  groupId: string
}

/** 请求事件: 邀请Bot加入群聊 */
export interface GroupInvite {
  /** 邀请者id */
  inviterId: string
  /** 请求 flag，在调用处理请求的 API 时需要传入 */
  flag: string
}
