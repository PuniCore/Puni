/**
 * 事件来源
 */
export enum Scene {
  /** 群聊 */
  Group = 'group',
  /** 好友聊天 */
  Friend = 'friend',
  /** 频道 */
  Guild = 'guild',
  /** 频道私信 */
  GuildDirect = 'guildDirect',
  /** 临时群会话 */
  GroupTemp = 'groupTemp'
}

/**
 * 事件来源类型基类
 */
export interface BaseContact {
  /** 事件来源 */
  scene: Scene
  /** 事件来源id */
  peer: string
  /** 事件来源子id 仅在频道、频道私信和临时会话中存在 */
  subPeer?: string
  /** 来源场景的昵称 */
  name: string
  /** 来源场景的子昵称 */
  subName?: string
}
