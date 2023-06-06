import mongoose from 'mongoose'
import IGenericErrorMessage from '../interfaces/Errors/genericErrorMessage'

const validationErrorHandle = (
  err: mongoose.Error.ValidationError,
  statusCode = 400
)=> {
  const errs: IGenericErrorMessage[] = Object.values(err.errors).map(
    (singleErr: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: singleErr.path,
        message: singleErr.message,
      }
    }
  )
  return {
    statusCode,
    messages: 'Validation Error',
    errorMessages: errs,
  }
}
export default validationErrorHandle
