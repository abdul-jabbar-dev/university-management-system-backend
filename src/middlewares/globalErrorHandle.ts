import { NextFunction, Request, Response } from 'express'
import config from '../config'
import IGenericErrorMessage from '../interfaces/Errors/genericErrorMessage'
import validationErrorHandle from '../Errors/validationError'
import MyError from '../Errors'
import { Error } from 'mongoose'

const GlobalEmailHandleMiddleware = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 400
  let message = 'Something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'Validation Error' || err instanceof Error.ValidatorError) {
    const getValidationError = validationErrorHandle(err)
    statusCode = getValidationError?.statusCode || statusCode
    message = getValidationError?.messages
    errorMessages = getValidationError?.errorMessages
  } else if (err instanceof Error) {
    message = err.message
    errorMessages = [{ path: '', message: '' }]
  } else if (err instanceof MyError) {
    message = err.message
    statusCode = err.myStatus
    errorMessages = [{ path: '', message: '' }]
  }

  res.status(statusCode).json({
    status: 'False',
    message,
    errorMessages,
    stacks: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default GlobalEmailHandleMiddleware
