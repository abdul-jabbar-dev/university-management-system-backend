import env from 'dotenv'
import path from 'path'
env.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
}
