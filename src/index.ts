import 'reflect-metadata'
import { createConnection } from 'typeorm'
import log from 'loglevel'
import { DB_CONFIG } from './config'

async function startDB() {
  try {
    const conn = await createConnection(DB_CONFIG)
    log.info(`> DB is connected: ${conn.isConnected ? 'YES' : 'NO'}`)

    // WORK WITH CONNECTION
  } catch (err) {
    log.error(`> Error occurred while trying to connect the db: ${err.message}`)
    process.exit()
  }
}

startDB()
