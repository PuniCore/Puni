export interface Redis {
  /** redis主机地址 */
  host: string
  /** redis端口 */
  port: number
  /** redis用户名 */
  username: string
  /** redis密码 */
  password: string
  /** redis数据库 */
  db: number
}
