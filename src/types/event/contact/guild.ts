import { BaseContact, Scene } from '@puni/types/event/contact/base'

/**
 * 频道私信来源信息类型
 */
export interface GuildDirectContact extends BaseContact {
  scene: Scene.GuildDirect
  /** 频道ID 虚拟ID 用于请求Api使用 */
  peer: string
  /** 频道名称 */
  name: string
  /** 子频道ID 虚拟ID */
  subPeer: string
  /** 子频道名称 */
  subName?: string
}

/**
 * 频道来源信息类型
 */
export interface GuildContact extends BaseContact {
  scene: Scene.Guild
  /** 频道ID */
  peer: string
  /** 频道名称 */
  name: string
  /** 子频道ID */
  subPeer: string
  /** 子频道名称 */
  subName: string
}
