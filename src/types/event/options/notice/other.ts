import type { Contact, Scene } from '@puni/types/event/contact'
import type { ReceiveLikeType } from '@puni/types/event/content'
import type { NoticeOptions } from '@puni/types/event/options/notice/base'
import type { Sender } from '@puni/types/event/sender'

/** 创建收到点赞通知事件 */
export type ReceiveLikeOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Friend>
  /** 事件创建者信息 */
  sender: Sender<Scene.Friend>
  /** 请求内容 */
  content: ReceiveLikeType
}
