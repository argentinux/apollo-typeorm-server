import log from 'loglevel'
import { __LOG_LEVEL__, __SECRET__ } from './config'

log.setLevel(__LOG_LEVEL__)

log.debug(`>> DEBUG ${__SECRET__}`)
log.info(`>> INFO ${__SECRET__}`)
