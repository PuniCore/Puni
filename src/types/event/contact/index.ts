import { Scene } from '@puni/types/event/contact/base'
import { FriendContact } from '@puni/types/event/contact/friend'
import { GroupContact, GroupTempContact } from '@puni/types/event/contact/group'
import { GuildContact, GuildDirectContact } from '@puni/types/event/contact/guild'
/**
 * 事件来源信息
 * - `group`: 群聊
 * - `friend`: 好友
 * - `guild`: 频道
 * - `direct`: 频道私信
 * - `groupTemp`: 临时群会话
 */
export type Contact<T extends Scene = Scene> =
  T extends Scene.Group
    ? GroupContact : T extends Scene.Friend
      ? FriendContact : T extends Scene.Guild
        ? GuildContact : T extends Scene.GuildDirect
          ? GuildDirectContact : T extends Scene.GroupTemp
            ? GroupTempContact : never

export * from '@puni/types/event/contact/base'
export * from '@puni/types/event/contact/friend'
export * from '@puni/types/event/contact/group'
export * from '@puni/types/event/contact/guild'
