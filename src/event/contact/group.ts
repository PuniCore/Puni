import {
  GroupContact,
  GroupTempContact,
  Scene
} from '@puni/types/event/contact'

/**
 * 构建群聊事件来源
 * @param peer 群ID
 * @param name 群名
 */
export const contactGroup = (
  peer: GroupContact['peer'],
  name: GroupContact['name'] = ''
): GroupContact => {
  return {
    scene: Scene.Group,
    peer,
    name
  }
}

/**
 * 构建群聊临时会话事件来源
 * @param peer 群ID
 * @param subPeer 发起临时会话的用户ID
 * @param name 群名
 */
export const contactGroupTemp = (
  peer: GroupTempContact['peer'],
  subPeer: GroupTempContact['subPeer'],
  name: GroupTempContact['name'] = ''
): GroupTempContact => {
  return {
    scene: Scene.GroupTemp,
    peer,
    subPeer,
    name
  }
}
