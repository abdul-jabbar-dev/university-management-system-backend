import { Router } from 'express'
import { createUser, getUser } from './users.controller'

const usersRouter = Router()

usersRouter.post('/create-user', createUser)
usersRouter.get('/all-users', getUser)

export default usersRouter
