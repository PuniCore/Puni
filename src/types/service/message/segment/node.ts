import { Elements, messageType } from '@puni/types/service/message/segment/segment'
/** 转发消息节点类型 */
export const enum subType {
  MessageId = 'messageID',
  Fake = 'fake'
}

interface Element {
  /** 消息段类型 */
  type: messageType.Node
  /** 节点类型 */
  subType: subType
}

/** 合并转发接口外显参数 */
export interface ForwardOptions {
  /** 小卡片中间的外显 */
  news: Array<{ text: string }>,
  /** 消息列表的外显 */
  prompt: string,
  /** 小卡片底下文本: 查看1条转发消息 */
  summary: string,
  /** 小卡片标题 */
  source: string
}

/** 常规合并转发节点 */
export interface DirectNodeElement extends Element {
  subType: subType.MessageId
  /** 消息ID */
  messageId: string
}

/** 自定义节点 */
export interface CustomNodeElement extends Element {
  subType: subType.Fake
  /** 目标ID */
  userId: string
  /** 目标名称 */
  nickname: string
  /** 转发的元素节点 */
  message: Array<SendElement>
  /** 外显设置 */
  options?: ForwardOptions
}

/** 合并转发节点消息段 */
export type NodeElement = DirectNodeElement | CustomNodeElement
/** 合并转发节点消息段 */
export type SendElement = NodeElement | Elements
