import dotenv from 'dotenv'
import log, { LogLevelDesc } from 'loglevel'
import { ConnectionOptions } from 'typeorm'

dotenv.config()

export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const __LOG_LEVEL__: LogLevelDesc = __PRODUCTION__ ? 'INFO' : 'DEBUG'
export const __SECRET__ = process.env.SECRET_KEY || 'secret'

export const DB_CONFIG = {
  type: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  entities: [`${__dirname}/entities/*.ts`],
  synchronize: true,
  logging: !__PRODUCTION__,
} as ConnectionOptions

log.setLevel(__LOG_LEVEL__)
