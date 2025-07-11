/**
 * 权限类型
 */
export enum Permission {
  /** 所有人 */
  ALL = 'all',
  /** 所有者 */
  MASTER = 'master',
  /** 管理员 */
  ADMIN = 'admin',
  /** 群主 */
  GROUP_OWNER = 'group.owner',
  /** 群管理 */
  GROUP_ADMIN = 'group.admin',
  /** 频道主 */
  GUILD_OWNER = 'guild.owner',
  /** 频道管理 */
  GUILD_ADMIN = 'guild.admin'
}
