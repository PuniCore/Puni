/**
 * 适配器平台枚举
 * - `QQ`: QQ平台
 * - `WeChat`: 微信平台
 * - `Telegram`: Telegram平台
 * - `Discord`: Discord平台
 * - `KoKo`: 开黑吧平台
 * - `Other`: 其他平台
 */
export enum AdapterPlatform {
  QQ = 'qq',
  WeChat = 'wechat',
  Telegram = 'telegram',
  Discord = 'discord',
  KoKo = 'koko',
  Other = 'other'
}

/**
 * 适配器标准协议枚举
 * - `OneBot11`: OneBot v11 标准
 * - `OneBot12`: OneBot v12 标准
 * - `OICQ`: OICQ 标准
 * - ICQQ`: OICQ fork 标准
 * - `Other`: 其他标准
 */
export enum AdapterStandard {
  OneBot11 = 'onebot11',
  OneBot12 = 'onebot12',
  OICQ = 'oicq',
  ICQQ = 'icqq',
  Other = 'other'
}

/**
 * 适配器协议实现名称
 * - `QQBot` : https://bot.q.qq.com/wiki
 * - `ICQQ`: https://github.com/icqqjs/icqq
 * - `GoCQHTTP`: https://docs.go-cqhttp.org
 * - `Napcat`: https://napneko.github.io/zh-CN
 * - `OICQ`: https://github.com/takayama-lily/oicq
 * - `LLOneBot`: https://llonebot.github.io/zh-CN
 * - `ConWeChat`: https://justundertaker.github.io/ComWeChatBotClient
 * - `Lagrange`: https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot
 * - `Console`: 控制台
 */
export enum AdapterProtocol {
  QQBot = 'qqbot',
  ICQQ = 'icqq',
  GoCQHTTP = 'gocq-http',
  Napcat = 'napcat',
  OICQ = 'oicq',
  LLOneBot = 'llonebot',
  ConWeChat = 'conwechat',
  Lagrange = 'lagrange',
  Console = 'console',
  Other = 'other'
}

/**
 * 适配器通信方式
 * - `Http`: HTTP 通信
 * - `WebSocketServer`: WebSocket 服务端
 * - `WebSocketClient`: WebSocket 客户端
 * - `Grpc`: gRPC 通信
 * - `Other`: 其他通信方式
 */
export enum AdapterCommunication {
  HTTP = 'http',
  WebSocketServer = 'webSocketServer',
  WebSocketClient = 'webSocketClient',
  GRPC = 'grpc',
  Other = 'other'
}

/**
 * 适配器基本信息
 */
export interface AdapterInfo {
  /** 适配器索引 默认为-1 在注册适配器时会自动更改为对应的索引 */
  index: number
  /** 适配器名称 如lagrange-onebot */
  name: string
  /** 适配器版本 */
  version: string
  /** 适配器平台 */
  platform: AdapterPlatform
  /** 适配器使用的协议标准 如onebot11 */
  standard: AdapterStandard
  /** 适配器协议实现 如gocq、napcat */
  protocol: AdapterProtocol
  /** 适配器通信方式 */
  communication: AdapterCommunication
  /**
   * 适配器通信地址
   * @example `http://127.0.0.1:7000`
   * @example `ws://127.0.0.1:7000/ws`
   * @example `grpc://127.0.0.1:7001`
   * @example `internal://127.0.0.1`
   */
  address: string
  /** 连接时间 */
  connectTime: number
  /** 鉴权秘钥 */
  secret: string | null
}
