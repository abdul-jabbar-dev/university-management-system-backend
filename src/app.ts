
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.router'
import GlobalEmailHandleMiddleware from './middlewares/globalErrorHandle'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', usersRouter)

app.get('/', (req: Request, res: Response ) => {
   res.send("Home")
}) 


// Erorr handler
app.use(GlobalEmailHandleMiddleware)
export default app
