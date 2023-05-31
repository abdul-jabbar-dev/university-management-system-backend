import express, { Application, Response, Request } from 'express'
import cors from 'cors'

const app: Application = express()
          app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: any, res: Response) => {
  res.send('Home')
})

export default app
