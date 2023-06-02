import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function run() {
  try {
    console.log('⏳ Database connecting.....')
    await mongoose.connect(config.db_url as string)
    console.log('🛢️  Database connection successfully')

    app.listen(config.port, () =>
      console.log(
        '.....................Server is running...............................'
      )
    )
  } catch (error) {
    console.log('⛔ Fatal to connected database⛔ : ', error)
  }
}
run()
