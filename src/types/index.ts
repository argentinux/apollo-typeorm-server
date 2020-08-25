import { EntityManager } from 'typeorm'
import { Request, Response } from 'express'

export type AppContext = {
  em: EntityManager
  req?: Request
  res?: Response
}
