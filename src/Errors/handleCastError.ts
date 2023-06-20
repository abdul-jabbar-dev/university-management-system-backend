import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/Errors/genericErrorResponse';

const handleCastError = (
  err: mongoose.Error.CastError
): IGenericErrorResponse => { 
  const castError: IGenericErrorResponse = {
    messages: err.name,
    statusCode: 400,
    errorMessages: [{ path: err.path, message: err.message }],
  };
  return castError;
};
export default handleCastError;
