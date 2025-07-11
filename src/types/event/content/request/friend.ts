/** 请求事件: 好友申请 */
export interface PrivateApplyType {
  /** 申请者id */
  applierId: string
  /** 验证信息 */
  message: string
  /** 请求 flag，在调用处理请求的 API 时需要传入 */
  flag: string
}
