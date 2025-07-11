import { GroupApplyRequest, GroupInviteRequest, PrivateApplyRequest } from '@puni/event/event/request'

/** 好友请求事件对应的对象类型 */
export interface FriendRequestEventMap {
  'request.friendApply': PrivateApplyRequest
}

/** 群聊请求事件对应的对象类型 */
export interface GroupRequestEventMap {
  'request.groupApply': GroupApplyRequest
  'request.groupInvite': GroupInviteRequest
}

/** 请求事件对应的对象类型 */
export interface RequestEventMap extends FriendRequestEventMap, GroupRequestEventMap {
  request: Request
}

/**
 * @description 请求事件类型
 */
export type Request = PrivateApplyRequest | GroupApplyRequest | GroupInviteRequest
