import { logger } from '@puni/service/logger'
import {
  AdapterCommunication,
  AdapterPlatform,
  AdapterProtocol,
  AdapterStandard,
  AdapterType,
  CreateGroupFolderResponse,
  DownloadFileOptions,
  DownloadFileResponse,
  GetAiCharactersResponse,
  GetAtAllCountResponse,
  GetGroupFileListResponse,
  GetGroupFileSystemInfoResponse,
  GetGroupHighlightsResponse,
  GetGroupMuteListResponse,
  GetRkeyResponse,
  GroupInfo,
  GroupMemberInfo,
  MessageResponse,
  QQGroupHonorInfo,
  SendMsgResults,
  UserInfo
} from '@puni/types/adapter'
import { Contact } from '@puni/types/event/contact'
import { Elements, ForwardOptions, NodeElement } from '@puni/types/service/message/segment'
import { LoggerLevel } from '@punicore/logger'

/**
 * 适配器基类 一个示例
 * @class AdapterBase
 */
export abstract class AdapterBase<T = any> implements AdapterType<T> {
  account: AdapterType['account']
  adapter: AdapterType['adapter']
  super: T
  raw: T

  constructor () {
    this.raw = {} as T
    this.super = {} as T
    this.account = {
      uin: '',
      uid: '',
      selfId: '',
      // subId: {},
      name: '',
      avatar: ''
    }
    this.adapter = {
      index: -1,
      name: '',
      version: '',
      platform: AdapterPlatform.QQ,
      standard: AdapterStandard.Other,
      protocol: AdapterProtocol.Console,
      communication: AdapterCommunication.Other,
      address: '',
      secret: null,
      connectTime: Date.now()
    }
  }

  get #errMsg (): string {
    return `[adapter][${this.adapter.protocol}] 此接口未实现`
  }

  get selfId (): string {
    return this.account.selfId
  }

  get selfName (): string {
    return this.account.name
  }

  // selfSubId (key: string): string {
  //   return this.account.subId[key]
  // }

  /**
	 * 打印当前Bot的专属日志
	 * @param level 日志等级
	 * @param args 日志内容
	 */
  logger (level: Exclude<LoggerLevel, 'off'>, ...args: any[]): void {
    logger.bot(level, this.account.selfId, ...args)
  }

  /**
	 * 发送消息
	 * @param _contact 目标信息
	 * @param _elements 消息元素
	 * @param _retryCount 重试次数 默认为0
	 */
  sendMsg (
    _contact: Contact,
    _elements: Array<Elements>,
    _retryCount?: number
  ): Promise<SendMsgResults> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 发送长消息
	 * @param _contact 目标信息
	 * @param _resId 资源ID
	 */
  sendLongMsg (_contact: Contact, _resId: string): Promise<SendMsgResults> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 发送合并转发消息
	 * @param _contact 目标信息
	 * @param _elements 消息元素
	 * @param _options 首层小卡片外显参数
	 */
  sendForwardMsg (
    _contact: Contact,
    _elements: Array<NodeElement>,
    _options?: ForwardOptions
  ): Promise<{ messageId: string; forwardId: string }> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 撤回消息
	 * @param _contact 目标信息
	 * @param _messageId 消息ID
	 */
  recallMsg (_contact: Contact, _messageId: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取头像url
	 * @param _userId 用户ID
	 * @param _size 头像大小，默认需要为`0`，请开发者注意
	 * @returns 头像的url地址
	 */
  getAvatarUrl (_userId: string, _size?: 0 | 40 | 100 | 140): Promise<string> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群头像url
	 * @param _groupId 群号
	 * @param _size 头像大小，默认`0`
	 * @param _history 历史头像记录，默认`0`，若要获取历史群头像则填写1,2,3...
	 * @returns 头像的url地址
	 */
  getGroupAvatarUrl (
    _groupId: string,
    _size?: 0 | 40 | 100 | 140,
    _history?: number
  ): Promise<string> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取消息
	 * @param _contact 目标信息
	 * @param _messageId 消息ID
	 * @returns MessageResponse对象
	 */
  getMsg (_contact: Contact | string, _messageId?: string): Promise<MessageResponse> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取msgId获取历史消息
	 * @param _contact 目标信息
	 * @param _startMsgId 起始消息ID
	 * @param _count 获取消息数量 默认为1
	 * @returns 包含历史消息的数组
	 */
  getHistoryMsg (
    _contact: Contact,
    _startMsgId: string,
    _count: number
  ): Promise<Array<MessageResponse>>

  /**
	 * 获取msgSeq获取历史消息
	 * @param _contact 目标信息
	 * @param _startMsgSeq 起始消息序列号
	 * @param _count 获取消息数量 默认为1
	 * @returns 包含历史消息的数组
	 */
  getHistoryMsg (
    _contact: Contact,
    _startMsgSeq: number,
    _count: number
  ): Promise<Array<MessageResponse>>

  /**
	 * 获取msgId获取历史消息
	 * @param _contact 目标信息
	 * @param _startMsgId 起始消息ID
	 * @param _count 获取消息数量 默认为1
	 * @returns 包含历史消息的数组
	 */
  getHistoryMsg (
    _contact: Contact,
    _startMsgId: string | number,
    _count: number
  ): Promise<Array<MessageResponse>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取合并转发消息
	 * @param _resId 资源ID
	 * @returns 包含MessageResponse对象的数组
	 */
  getForwardMsg (_resId: string): Promise<Array<MessageResponse>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取精华消息
	 * @param _groupId 群ID
	 * @param _page 页码
	 * @param _pageSize 每页数量
	 * @returns EssenceMessageBody对象
	 */
  getGroupHighlights (
    _groupId: string,
    _page: number,
    _pageSize: number
  ): Promise<Array<GetGroupHighlightsResponse>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 构造一个资源ID 即上传合并转发消息后不进行发送
	 * @param _contact 目标信息
	 * @param _elements 转发消息元素
	 * @description 此接口并不是所有协议端都支持的，因此在使用时请注意
	 */
  createResId (_contact: Contact, _elements: Array<NodeElement>): Promise<string> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置、取消群精华消息
	 * @param _groupId 群ID
	 * @param _messageId 群消息ID
	 * @param _create true为添加精华消息，false为删除精华消息 默认为true
	 */
  setGroupHighlights (_groupId: string, _messageId: string, _create: boolean): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 发送好友赞
	 * @param _targetId 目标ID
	 * @param _count 赞的次数
	 */
  sendLike (_targetId: string, _count: number): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 群踢人
	 * @param _groupId 群ID
	 * @param _targetId 被踢出目标的ID 任选其一
	 * @param _rejectAddRequest 是否拒绝再次申请，默认为false
	 * @param _kickReason 踢出原因，可选
	 */
  groupKickMember (
    _groupId: string,
    _targetId: string,
    _rejectAddRequest?: boolean,
    _kickReason?: string
  ): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 禁言群成员
	 * @param _groupId 群ID
	 * @param _targetId 被禁言目标的ID 任选其一
	 * @param _duration 禁言时长 单位:秒
	 */
  setGroupMute (_groupId: string, _targetId: string, _duration: number): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 群全员禁言
	 * @param _groupId 群ID
	 * @param _isBan 是否开启全员禁言
	 */
  setGroupAllMute (_groupId: string, _isBan: boolean): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置群管理员
	 * @param _groupId 群ID
	 * @param _targetId 目标用户的ID
	 * @param _isAdmin 是否设置为管理员
	 */
  setGroupAdmin (_groupId: string, _targetId: string, _isAdmin: boolean): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置群名片
	 * @param _groupId 群ID
	 * @param _targetId 目标用户的ID
	 * @param _card 新的群名片
	 */
  setGroupMemberCard (_groupId: string, _targetId: string, _card: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置群名
	 * @param _groupId 群ID
	 * @param _groupName 新的群名
	 */
  setGroupName (_groupId: string, _groupName: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 退出群组
	 * @param _groupId 群ID
	 * @param _isDismiss 如果Bot是群主，是否解散群
	 */
  setGroupQuit (_groupId: string, _isDismiss: boolean): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置群专属头衔 仅群主可用
	 * @param _groupId 群ID
	 * @param _targetId 目标用户的ID
	 * @param _title 新的专属头衔
	 */
  setGroupMemberTitle (_groupId: string, _targetId: string, _title: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取陌生人信息 此接口数据无法保证完全正确并且无法保证数据的完整性
	 * @param _targetId 用户ID 任选其一
	 * @returns 陌生人信息数组
	 */
  getStrangerInfo (_targetId: string): Promise<UserInfo> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取好友列表
	 * @param _refresh 是否刷新好友列表
	 * @returns 好友列表数组
	 */
  getFriendList (_refresh?: boolean): Promise<Array<UserInfo>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群信息
	 * @param _groupId 群ID
	 * @param _noCache 是否刷新缓存
	 * @returns 群信息
	 */
  getGroupInfo (_groupId: string, _noCache?: boolean): Promise<GroupInfo> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群列表
	 * @param _refresh 是否刷新好友列表
	 * @returns 群列表数组
	 */
  getGroupList (_refresh?: boolean): Promise<Array<GroupInfo>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群成员信息
	 * 此接口在非QQ平台上很难获取到标准信息，因此返回的数据可能会有所不同
	 * @param _groupId 群ID
	 * @param _targetId 目标用户的ID
	 * @param _refresh 是否刷新缓存
	 * @returns 群成员信息
	 */
  getGroupMemberInfo (
    _groupId: string,
    _targetId: string,
    _refresh?: boolean
  ): Promise<GroupMemberInfo> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群成员列表
	 * @param _groupId 群ID
	 * @param _refresh 是否刷新缓存
	 * @returns 群成员列表数组
	 */
  getGroupMemberList (_groupId: string, _refresh?: boolean): Promise<Array<GroupMemberInfo>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群荣誉信息
	 * @param _groupId 群ID
	 * @param refresh 是否刷新缓存
	 * @returns 群荣誉信息数组
	 */
  getGroupHonor (_groupId: string): Promise<Array<QQGroupHonorInfo>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置好友请求结果
	 * @param _requestId 请求事件ID
	 * @param _isApprove 是否同意
	 * @param _remark 好友备注 同意时有效
	 */
  setFriendApplyResult (_requestId: string, _isApprove: boolean, _remark?: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置申请加入群请求结果
	 * @param _requestId 请求事件ID
	 * @param _isApprove 是否同意
	 * @param _denyReason 拒绝理由 拒绝时有效
	 */
  setGroupApplyResult (
    _requestId: string,
    _isApprove: boolean,
    _denyReason?: string
  ): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置邀请加入群请求结果
	 * @param _requestId 请求事件ID
	 * @param _isApprove 是否同意
	 */
  setInvitedJoinGroupResult (_requestId: string, _isApprove: boolean): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置消息表情回应
	 * @param _contact 目标信息
	 * @param _messageId 消息ID
	 * @param _faceId 表情ID
	 */
  setMsgReaction (
    _contact: Contact,
    _messageId: string,
    _faceId: number,
    _isSet: boolean
  ): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 上传群文件、私聊文件
	 * @param _contact 目标信息
	 * @param _file 本地文件绝对路径
	 * @param _name 文件名称 必须提供
	 * @param _folder 父目录ID 不提供则上传到根目录 仅在群聊时有效
	 */
  uploadFile (_contact: Contact, _file: string, _name: string, _folder?: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 让协议端下载文件到协议端本地
	 * @param _options 下载文件的选项
	 * @returns 下载文件的绝对路径和文件MD5
	 */
  downloadFile (_options?: DownloadFileOptions): Promise<DownloadFileResponse> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 创建群文件夹
	 * @param _groupId 群号
	 * @param _name 文件夹名
	 * @returns 返回文件夹id和已使用空间
	 */
  createGroupFolder (_groupId: string, _name: string): Promise<CreateGroupFolderResponse> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 重命名群文件的文件夹
	 * @param _groupId 群号
	 * @param _folderId 文件夹id
	 * @param _name 文件夹名
	 * @returns 无返回值
	 */
  renameGroupFolder (_groupId: string, _folderId: string, _name: string): Promise<boolean> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 删除群文件的文件夹
	 * @param _groupId 群号
	 * @param _folderId 文件夹id
	 * @returns 无返回值
	 */
  delGroupFolder (_groupId: string, _folderId: string): Promise<boolean> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 上传群文件
	 * @description 此接口仅可以在Bot和协议端在同一台设备上时使用
	 * @param _groupId 群号
	 * @param _file 文件绝对路径
	 * @param _name 文件名
	 * @returns 无返回值
	 */
  uploadGroupFile (_groupId: string, _file: string, _name?: string): Promise<boolean> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取文件url
	 * @param _contact 目标信息
	 * @param _fileId 文件id
	 * @returns 文件url
	 */
  getFileUrl (_contact: Contact, _fileId: string): Promise<string> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 删除群文件
	 * @param _groupId 群号
	 * @param _fileId 文件id
	 * @param _busId 文件类型ID
	 * @returns 无返回值
	 */
  delGroupFile (_groupId: string, _fileId: string, _busId: number): Promise<boolean> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群文件系统信息
	 * @param _groupId 群号
	 * @returns 返回文件数量、文件数量上限、已使用空间和空间上限
	 */
  getGroupFileSystemInfo (_groupId: string): Promise<GetGroupFileSystemInfoResponse> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群文件夹下文件列表
	 * @param _groupId 群号
	 * @param _folderId 文件夹id，空则为根目录
	 * @returns 返回文件和文件夹的列表
	 */
  getGroupFileList (_groupId: string, _folderId?: string): Promise<GetGroupFileListResponse> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置群备注
	 * @param _groupId 群号
	 * @param _remark 新的备注
	 */
  setGroupRemark (_groupId: string, _remark: string): Promise<boolean> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取陌生群信息
	 * @param _groupId 群号
	 */
  getNotJoinedGroupInfo (_groupId: string): Promise<GroupInfo> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取艾特全体成员剩余次数
	 * @param _groupId 群号
	 * @returns 返回是否允许at全体成员和全群剩余次数、个人剩余次数
	 */
  getAtAllCount (_groupId: string): Promise<GetAtAllCountResponse> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群被禁言用户列表
	 * @param _groupId
	 * @returns 返回禁言用户列表
	 */
  getGroupMuteList (_groupId: string): Promise<Array<GetGroupMuteListResponse>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 戳一戳用户 支持群聊和私聊
	 * @param _contact 目标信息
	 * @param _count 戳一戳次数 默认为1
	 */
  pokeUser (_contact: Contact, _count?: number): Promise<boolean> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取 Cookies
	 * @param _domain The domain to get cookies from
	 */
  getCookies (_domain: string): Promise<{ cookie: string }> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取 QQ 相关接口凭证
	 * @param _domain The domain to get credentials from
	 */
  getCredentials (_domain: string): Promise<{ cookies: string; csrf_token: number }> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取 CSRF Token
	 */
  getCSRFToken (): Promise<{ token: number }> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置头像
	 * @param file base64:// file:// http(s)://
	 */
  setAvatar (_file: string): Promise<void> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取 rkey
	 * @returns rkey
	 */
  getRkey (): Promise<Array<GetRkeyResponse>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 获取群 Ai 语音可用声色列表
	 * @returns 声色列表
	 */
  getAiCharacters (): Promise<Array<GetAiCharactersResponse>> {
    throw new Error(this.#errMsg)
  }

  /**
	 * 设置群 Ai 语音声色
	 * @param _groupId 群号
	 * @param _characterId 声色ID
	 * @param _text 文本
	 * @returns 是否设置成功
	 */
  sendAiCharacter (
    _groupId: string,
    _characterId: string,
    _text: string
  ): Promise<{ messageId: string }> {
    throw new Error(this.#errMsg)
  }
}
