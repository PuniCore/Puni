import { BaseContact, Scene } from '@puni/types/event/contact/base'

/**
 * 群聊来源信息类型
 */
export interface GroupContact extends BaseContact {
  scene: Scene.Group
  /** 群ID */
  peer: string
  /** 群名 */
  name: string
}

/**
 * 群临时会话来源信息类型
 */
export interface GroupTempContact extends BaseContact {
  scene: Scene.GroupTemp
  /** 群ID */
  peer: string
  /** 发起临时会话用户ID */
  subPeer: string
  /** 群名 */
  name: string
}
