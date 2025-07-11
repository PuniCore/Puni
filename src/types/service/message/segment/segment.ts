import { Source } from '@puni/types/event/base'
import { Scene } from '@puni/types/event/contact/base'
import { PuniButton } from '@puni/types/service/message/segment/button'
/**
 * @description 消息段类型
 */
export enum messageType {
  /** 文本消息 */
  Text = 'text',
  /** 图片消息 */
  Image = 'image',
  /** @用户消息 */
  At = 'at',
  /** 表情消息 */
  Face = 'face',
  /** 引用回复消息 */
  Reply = 'reply',
  /** 视频消息 */
  Video = 'video',
  /** 语音消息 */
  Record = 'record',
  /** 音乐消息 */
  Music = 'music',
  /** JSON格式消息 */
  Json = 'json',
  /** XML格式消息 */
  Xml = 'xml',
  /** Markdown格式消息 */
  Markdown = 'markdown',
  /** Markdown模板消息 */
  MarkdownTpl = 'markdownTpl',
  /** 被动消息 */
  Pasmsg = 'pasmsg',
  /** 多维按钮消息 */
  Keyboard = 'keyboard',
  /** 单行按钮消息 */
  Button = 'button',
  /** 长消息 */
  LongMsg = 'longMsg',
  /** 原始消息 */
  Raw = 'raw',
  /** 篮球表情消息 */
  Basketball = 'basketball',
  /** 骰子表情消息 */
  Dice = 'dice',
  /** 猜拳表情消息 */
  Rps = 'rps',
  /** 气泡表情消息 */
  BubbleFace = 'bubbleFace',
  /** 天气消息 */
  Weather = 'weather',
  /** 位置消息 */
  Location = 'location',
  /** 分享消息 */
  Share = 'share',
  /** 礼物消息 */
  Gift = 'gift',
  /** 商城表情消息 */
  MarketFace = 'marketFace',
  /** 联系人名片消息 */
  Contact = 'contact',
  /** 合并转发节点消息 */
  Node = 'node',
  /** 文件消息 */
  File = 'file'
}

interface Element {
  /** 消息段类型 */
  type: messageType
}

/** 文本元素 */
export interface TextElement extends Element {
  type: messageType.Text
  /** 文本内容 */
  text: string
}

/** At元素 */
export interface AtElement extends Element {
  type: messageType.At
  /** 目标id atall=all at在线成员=online */
  targetId: string
  /** At的名称 */
  name?: string
}

/** 表情元素 */
export interface FaceElement extends Element {
  type: messageType.Face
  /** 表情ID */
  id: number
  /** 是否大表情，默认不是 */
  isBig?: boolean
}

/** 回复元素 */
export interface ReplyElement extends Element {
  type: messageType.Reply
  /** 回复的消息ID */
  messageId: string
}

/** 图片元素 */
export interface ImageElement extends Element {
  type: messageType.Image
  /** 图片url、路径或者base64 */
  file: string
  /** fid */
  fid?: string
  /** 图片名称 */
  name?: string
  /** 图片外显名称 */
  summary?: string
  /** 图片MD5 */
  md5?: string
  /** 图片宽度 */
  width?: number
  /** 图片高度 */
  height?: number
  /** 图片子类型 */
  subType?: string
  /** 图片大小 */
  size?: number
  /**
   * show: 展示图片
   * flash: 闪照
   * original: 原图
   */
  fileType?: 'show' | 'flash' | 'original'
}

/** 视频元素 */
export interface VideoElement extends Element {
  type: messageType.Video
  /** 视频url、路径或者base64 */
  file: string
  /** fid */
  fid?: string
  /** 视频名称 */
  name?: string
  /** 视频MD5 */
  md5?: string
  /** 视频宽度 */
  width?: number
  /** 视频高度 */
  height?: number
}

/** 文件元素 */
export interface FileElement extends Element {
  type: messageType.File
  /** url、路径或者base64 */
  file: string
  /** fid */
  fid?: string
  /** 文件名称 */
  name?: string
  /** 文件大小 */
  size?: number
  /** 文件hash */
  hash?: string
}

/** 语音元素 */
export interface RecordElement extends Element {
  type: messageType.Record
  /** 语音文件url、路径或者base64 */
  file: string
  /** fid */
  fid?: string
  /** 是否为魔法语音 */
  magic: boolean
  /** 语音md5 */
  md5?: string
  /** 语音名称 */
  name?: string
}

// 音乐元素有2种类型，一种是自定义音乐，一种是QQ音乐、网易云音乐、咪咕音乐、酷狗音乐、酷我音乐 通过泛型来区分
/**
 * 支持的音乐平台
 */
export enum MusicPlatform {
  /** 自定义音乐 */
  CUSTOM = 'custom',
  /** QQ音乐 */
  QQ = 'qq',
  /** 网易云音乐 */
  NET_EASE = '163',
  /** 咪咕音乐 */
  MIGU = 'migu',
  /** 酷狗音乐 */
  KUGOU = 'kugou',
  /** 酷我音乐 */
  KUWO = 'kuwo'
}

/** 常规音乐 */
export interface ReadyMusicElement extends Element {
  type: messageType.Music
  /** 音乐平台 */
  platform: MusicPlatform.QQ | MusicPlatform.NET_EASE | MusicPlatform.MIGU | MusicPlatform.KUGOU | MusicPlatform.KUWO
  /** 歌曲ID */
  id: string
}

/** 自定义音乐元素 */
export interface CustomMusicElement extends Element {
  type: messageType.Music
  /** 音乐平台 */
  platform: MusicPlatform.CUSTOM
  /** 跳转链接 */
  url: string
  /** 音乐音频链接 */
  audio: string
  /** 标题 */
  title: string
  /** 歌手 */
  author: string
  /** 封面 */
  pic: string
}

/** 音乐元素 */
export type MusicElement = CustomMusicElement | ReadyMusicElement

/** JSON元素 */
export interface JsonElement extends Element {
  type: messageType.Json
  /** JSON内容 未反序 */
  data: string
}

/** XML元素 */
export interface XmlElement extends Element {
  type: messageType.Xml
  /** XML内容 未反序 */
  data: string
}

/** Markdown元素 */
export interface MarkdownElement extends Element {
  type: messageType.Markdown
  /** Markdown内容 */
  markdown: string
  config?: {
    /** 未知的参数 */
    unknown?: number
    time: number
    token: string
  }
}

/** Markdown模板元素 */
export interface MarkdownTplElement extends Element {
  type: messageType.MarkdownTpl
  /** 模板ID */
  templateId: string
  /** 模板参数 */
  params: Array<{
    /** 模板参数键名称 */
    key: string
    /** 模板参数值 */
    values: Array<string>
  }>
}

/** 被动事件元素 */
export interface PasmsgElement extends Element {
  type: messageType.Pasmsg
  /** 事件id来源 */
  source: Source.Msg | Source.Event
  /** 被动事件ID */
  id: string
}

/** 多行按钮 */
export interface KeyboardElement extends Element {
  type: messageType.Keyboard
  /** 按钮行数组 */
  rows: PuniButton[][]
}

/** 单行按钮 */
export interface ButtonElement extends Element {
  type: messageType.Button
  /** 按钮数组 */
  data: PuniButton[]
}

/** 长消息元素 */
export interface LongMsgElement extends Element {
  type: messageType.LongMsg
  /** 消息ID */
  id: string
}

/** 原始元素 */
export interface RawElement extends Element {
  type: messageType.Raw
  /** 原始数据 */
  data: any
}

/** 篮球元素 */
export interface BasketballElement extends Element {
  type: messageType.Basketball
  /** 篮球ID */
  id: number
}

/** 骰子元素 */
export interface DiceElement extends Element {
  type: messageType.Dice
  /** 骰子ID */
  id: number
}

/** 猜拳元素 */
export interface RpsElement extends Element {
  type: messageType.Rps
  /** 猜拳ID */
  id: number
}

/** 弹射表情元素 */
export interface BubbleFaceElement extends Element {
  type: messageType.BubbleFace
  /** 表情ID */
  id: number
  /** 表情数量 */
  count: number
}

/** 天气元素 */
export interface WeatherElement extends Element {
  type: messageType.Weather
  /** 城市名称 */
  city: string
  /** 城市代码 */
  code: string
}

/** 位置元素 */
export interface LocationElement extends Element {
  type: messageType.Location
  /** 纬度 */
  lat: number
  /** 经度 */
  lon: number
  /** 标题 */
  title: string
  /** 地址 */
  address: string
}

/** 分享元素 */
export interface ShareElement extends Element {
  type: messageType.Share
  /** 分享链接 */
  url: string
  /** 分享标题 */
  title: string
  /** 分享内容 */
  content: string
  /** 分享图片 */
  image: string
}

/** 礼物元素 */
export interface GiftElement extends Element {
  type: messageType.Gift
  /** QQ 号 */
  qq: number
  /** 礼物ID */
  id: number
}

/** 商城表情元素 */
export interface MarketFaceElement extends Element {
  type: messageType.MarketFace
  /** 表情ID */
  id: string
}

/** 分享名片元素 */
export interface ContactElement extends Element {
  type: messageType.Contact
  /** 分享类型 */
  scene: Scene.Group | Scene.Friend
  /** 被推荐人的QQ号或者被推荐群的群号 */
  peer: string
}

/**
 * 全部消息段元素
 */
export type Elements = TextElement
  | AtElement
  | FaceElement
  | ReplyElement
  | ImageElement
  | VideoElement
  | RecordElement
  | MusicElement
  | JsonElement
  | XmlElement
  | MarkdownElement
  | MarkdownTplElement
  | PasmsgElement
  | KeyboardElement
  | ButtonElement
  | LongMsgElement
  | RawElement
  | BasketballElement
  | DiceElement
  | RpsElement
  | BubbleFaceElement
  | WeatherElement
  | LocationElement
  | ShareElement
  | GiftElement
  | MarketFaceElement
  | ContactElement
  | FileElement

/**
 * 发送消息段类型
 */
export type SendMessage = string | Elements | Array<string | Elements>

/**
 * 全部消息段元素
 */
export type ElementTypes = Elements
