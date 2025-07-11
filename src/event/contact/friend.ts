import {
  FriendContact,
  Scene
} from '@puni/types/event/contact'

/**
 * 构建好友事件来源
 * @param peer 好友ID
 * @param name 好友昵称 默认为空字符串
 */
export const contactFriend = (
  peer: FriendContact['peer'],
  name: FriendContact['name'] = ''
): FriendContact => {
  return {
    scene: Scene.Friend,
    peer,
    name
  }
}
