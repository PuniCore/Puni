import type { Contact, Scene } from '@puni/types/event/contact'
import type { GroupApply, GroupInvite } from '@puni/types/event/content'
import type { RequestOptions } from '@puni/types/event/options/requset/base'

/** 创建新成员加入群聊申请请求事件 */
export type GroupApplyRequestOptions = RequestOptions & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupApply
}

/** 创建邀请机器人加入群聊请求事件 */
export type GroupInviteRequestOptions = RequestOptions & {
  /** 事件来源信息 */
  contact: Contact<Scene.Group>
  /** 事件创建者信息 */
  sender: Scene.Group
  /** 请求内容 */
  content: GroupInvite
}
