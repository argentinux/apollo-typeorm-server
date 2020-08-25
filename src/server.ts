/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createConnection, EntityManager } from 'typeorm'
import express from 'express'
import log from 'loglevel'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import HelloResolver from './resolvers/hello'
import { DB_CONFIG, __APP_PORT__ } from './config'

export const startServer = async (manager: EntityManager) => {
  const app = express()

  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
  })

  const apolloServer = new ApolloServer({
    schema,
    context: manager,
  })

  apolloServer.applyMiddleware({ app })

  return new Promise((resolve) => {
    const server = app.listen(__APP_PORT__, () => {
      log.info(`Server listening at ${__APP_PORT__}`)
    })
    resolve(server)
  })
}

export const startDB = async () => {
  const conn = await createConnection(DB_CONFIG).catch((err) => {
    log.error(`Error while trying connect to DB ${err.message}`)
    // Handle Error Type
    process.exit()
  })
  return conn.manager
}
