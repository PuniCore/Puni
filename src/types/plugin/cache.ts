import type { MessageEventMap } from '@puni/types/event'
import type { Accept, NoticeAndRequest } from '@puni/types/plugin/accept'
import type { PkgInfo } from '@puni/types/plugin/base'
import type { Button } from '@puni/types/plugin/button'
import type { Command, CommandClass } from '@puni/types/plugin/command'
import type { Handler } from '@puni/types/plugin/handler'
import type { Task } from '@puni/types/plugin/task'
import type { FSWatcher } from 'chokidar'

export interface Count {
  accept: number
  command: number
  task: number
  button: number
  handler: {
    /** 入口key */
    key: number
    /** handler处理函数 */
    fnc: number
  }
}

/** 缓存 */
export interface Cache {
  /** 插件索引 */
  index: Record<number, PkgInfo>
  /** accept */
  accept: Accept<keyof NoticeAndRequest>[]
  /** command */
  command: Array<CommandClass<keyof MessageEventMap> | Command<keyof MessageEventMap>>
  /** 定时任务 */
  task: Array<Task>
  /** 按钮 */
  button: Button[]
  /** 插件数量统计 */
  count: Count
  /** 插件名称:缺失的依赖 */
  missing: Map<string, string>
  /** apps监听 */
  watcher: Map<string, FSWatcher>
  /** handler */
  handler: Record<string, Handler[]>
  /** 静态资源目录 */
  static: string[]
}

/**
 * 已加载插件缓存信息列表
 */
export interface LoadedPluginCacheList {
  /** 插件名称 */
  name: string
  /** 插件文件列表 */
  files: {
    /** 文件名称 */
    fileName: string
    /** 该文件下所有的command函数名称 */
    command: {
      /** 此函数的插件名称 */
      pluginName: string
      /** 此函数的导出名称 */
      method: string
    }[]
  }[]
}
