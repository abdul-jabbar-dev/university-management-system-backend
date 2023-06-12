/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger } from './shared/logger.winston'
import { Server } from 'http'

process.on('uncaughtException', err => {
  logger.error('uncaughtException server is terminate: ', err.message)
})

async function run() {
  let server: Server
  try {
    logger.info('⏳ Database connecting.....')
    await mongoose.connect(config.db_url as string)
    logger.info('🛢️  Database connection successfully')

    server = app.listen(config.port, () =>
      logger.info(
        '.....................Server is running...............................'
      )
    )

    process.on('unhandledRejection', errors => {
      const unhandledRejectionErr =
        'unhandled Rejection detected! server is closing -----------: ' + errors
      console.log(unhandledRejectionErr)
      if (server) {
        server.close(() => {
          logger.error(unhandledRejectionErr)
          process.exit(1)
        })
      } else {
        logger.error(unhandledRejectionErr)
        process.exit(1)
      }
    })

    process.on('SIGTERM', () => {
      logger.info('Signal receved: ')
      if (server) {
        server.close()
      }
    })
  } catch (error) {
    console.log(error)
    logger.error('⛔ Fatal to connected database⛔ : ', error)
  }
}
run()
