import { BaseContact, Scene } from '@puni/types/event/contact/base'

/**
 * 好友来源信息类型
 */
export interface FriendContact extends BaseContact {
  scene: Scene.Friend
  /** 好友ID */
  peer: string
  /** 好友昵称 */
  name: string
}
