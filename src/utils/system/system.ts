import os from 'node:os'

import { existsSync } from '@puni/utils/fs/fsSync'

const platform = os.platform()
const userInfo = os.userInfo()

/** 是否为windows */
export const isWin = platform === 'win32'
/** 是否为linux */
export const isLinux = platform === 'linux'
/** 是否为mac */
export const isMac = platform === 'darwin'
/** 是否为docker */
export const isDocker = existsSync('/.dockerenv')
/** 是否为root用户 仅linux */
export const isRoot = userInfo.uid === 0
