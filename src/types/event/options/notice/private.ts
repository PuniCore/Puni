import type { Contact, Scene } from '@puni/types/event/contact'
import type { PrivateFileUploadedType, PrivatePokeType, PrivateRecallType } from '@puni/types/event/content'
import type { NoticeOptions } from '@puni/types/event/options/notice/base'
import type { Sender } from '@puni/types/event/sender'

/** 创建私聊戳一戳通知事件 */
export type PrivatePokeOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Friend>
  /** 事件创建者信息 */
  sender: Sender<Scene.Friend>
  /** 请求内容 */
  content: PrivatePokeType
}

/** 创建私聊撤回消息通知事件 */
export type PrivateRecallOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Friend>
  /** 事件创建者信息 */
  sender: Sender<Scene.Friend>
  /** 请求内容 */
  content: PrivateRecallType
}

/** 创建私聊文件上传通知事件 */
export type PrivateFileUploadedOptions = Omit<NoticeOptions, 'subEvent'> & {
  /** 事件来源信息 */
  contact: Contact<Scene.Friend>
  /** 事件创建者信息 */
  sender: Sender<Scene.Friend>
  /** 请求内容 */
  content: PrivateFileUploadedType
}
