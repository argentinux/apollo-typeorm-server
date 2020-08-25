import 'reflect-metadata'
import log from 'loglevel'
import { __LOG_LEVEL__ } from './config'
import { startServer, startDB } from './server'

log.setLevel(__LOG_LEVEL__)

async function startApp() {
  const manager = await startDB()
  startServer(manager).catch((err) => {
    log.error(`> Fail to start server ${err.message}`)
  })
}

startApp()
