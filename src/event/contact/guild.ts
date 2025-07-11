import {
  GuildContact,
  GuildDirectContact,
  Scene
} from '@puni/types/event/contact'

/**
 * 构建频道事件来源
 * @param peer 频道ID
 * @param subPeer 子频道ID
 * @param name 频道名称 默认为空字符串
 * @param subName 子频道名称 默认为空字符串
 */
export const contactGuild = (
  peer: GuildContact['peer'],
  subPeer: GuildContact['subPeer'],
  name: GuildContact['name'] = '',
  subName: GuildContact['subName'] = ''
): GuildContact => {
  return {
    scene: Scene.Guild,
    peer,
    subPeer,
    name,
    subName
  }
}

/**
 * 构建频道私信事件来源
 * @param peer 频道ID
 * @param subId 子频道ID
 * @param srcGuildId 来源频道ID
 * @param name 频道名称 默认为空字符串
 * @param subName 子频道名称 默认为空字符串
 */
export const contactGuildDirect = (
  peer: GuildDirectContact['peer'],
  subId: GuildDirectContact['subPeer'],
  name: GuildDirectContact['name'] = '',
  subName: GuildDirectContact['subName'] = ''
): GuildDirectContact => {
  return {
    scene: Scene.GuildDirect,
    peer,
    subPeer: subId,
    name,
    subName
  }
}
