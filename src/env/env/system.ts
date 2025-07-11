const platform = process.platform

/**
 * @description 是否为Windows
 */
export const isWin = () => platform === 'win32'
/**
 * @description 是否为Mac
 */
export const isMac = () => platform === 'darwin'
/**
 * @description 是否为Linux
 */
export const isLinux = () => platform === 'linux'
