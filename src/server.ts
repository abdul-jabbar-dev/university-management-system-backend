/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger } from './shared/logger.winston'

async function run() {
  try {
    logger.info('⏳ Database connecting.....')
    await mongoose.connect(config.db_url as string)
    logger.info('🛢️  Database connection successfully')

    app.listen(config.port, () =>
      logger.info(
        '.....................Server is running...............................'
      )
    )
  } catch (error) {
    logger.error('⛔ Fatal to connected database⛔ : ', error)
  }
}
run()
