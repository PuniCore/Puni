import type {
  FriendDecreaseNotice,
  FriendIncreaseNotice,
  GroupAdminChangedNotice,
  GroupCardChangedNotice,
  GroupFileUploadedNotice,
  GroupHlightsChangedNotice,
  GroupHonorChangedNotice,
  GroupLuckKingNotice,
  GroupMemberBanNotice,
  GroupMemberDecreaseNotice,
  GroupMemberIncreaseNotice,
  GroupMemberTitleUpdatedNotice,
  GroupMessageReactionNotice,
  GroupPokeNotice,
  GroupRecallNotice,
  GroupSignInNotice,
  GroupWholeBanNotice,
  PrivateFileUploadedNotice,
  PrivatePokeNotice,
  PrivateRecallNotice,
  ReceiveLikeNotice
} from '@puni/event/event/notice'

/** 私聊通知事件对应的对象类型 */
export interface FriendNoticeEventMap {
  'notice.receiveLike': ReceiveLikeNotice
  'notice.friendDecrease': FriendDecreaseNotice
  'notice.friendIncrease': FriendIncreaseNotice
  'notice.privatePoke': PrivatePokeNotice
  'notice.privateRecall': PrivateRecallNotice
  'notice.privateFileUploaded': PrivateFileUploadedNotice
}

/** 群聊通知事件对应的对象类型 */
export interface GroupNoticeEventMap {
  'notice.groupPoke': GroupPokeNotice
  'notice.groupRecall': GroupRecallNotice
  'notice.groupFileUploaded': GroupFileUploadedNotice
  'notice.groupCardChanged': GroupCardChangedNotice
  'notice.groupMemberTitleUpdate': GroupMemberTitleUpdatedNotice
  'notice.groupHighlightsChange': GroupHlightsChangedNotice
  'notice.groupMemberAdd': GroupMemberIncreaseNotice
  'notice.groupMemberRemove': GroupMemberDecreaseNotice
  'notice.groupAdminChanged': GroupAdminChangedNotice
  'notice.groupSignIn': GroupSignInNotice
  'notice.groupMemberBan': GroupMemberBanNotice
  'notice.groupWholeBan': GroupWholeBanNotice
  'notice.groupMessageReaction': GroupMessageReactionNotice
  'notice.groupLuckyKing': GroupLuckKingNotice
  'notice.groupHonorChange': GroupHonorChangedNotice
}

/** 通知事件对应的对象类型 */
export interface NoticeEventMap extends FriendNoticeEventMap, GroupNoticeEventMap {
  notice: Notice
}

/**
 * @description 通知事件类型
 */
export type Notice = ReceiveLikeNotice
  | FriendDecreaseNotice
  | FriendIncreaseNotice
  | PrivatePokeNotice
  | PrivateRecallNotice
  | PrivateFileUploadedNotice
  | GroupPokeNotice
  | GroupRecallNotice
  | GroupFileUploadedNotice
  | GroupCardChangedNotice
  | GroupMemberTitleUpdatedNotice
  | GroupHlightsChangedNotice
  | GroupMemberIncreaseNotice
  | GroupMemberDecreaseNotice
  | GroupAdminChangedNotice
  | GroupSignInNotice
  | GroupMemberBanNotice
  | GroupWholeBanNotice
  | GroupMessageReactionNotice
  | GroupLuckKingNotice
  | GroupHonorChangedNotice
