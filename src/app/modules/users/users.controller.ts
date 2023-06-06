import { NextFunction, Request, Response } from 'express'
import { createUserDB, getUsersDB } from './users.service'
import { TUser } from './users.interface'
import MyError from '../../../Errors'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, id, password, role } = req.body
    const result: TUser | null = await createUserDB({
      name,
      id,
      password,
      role,
    })
    res.status(200).json({ status: true, data: result })
  } catch (error) {
    next(error)
  }
}

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUsersDB()
    res.status(200).json({ status: true, data: result })
  } catch (error) {
    next(new MyError(700, 'hhe low wordl'))
  }
}
