/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import config from '../config';
import validationErrorHandle from '../Errors/validationError';
import MyError from '../Errors';
import { Error } from 'mongoose';
import { ZodError } from 'zod';
import handleZodError from '../Errors/handleZodError';
import handleCastError from '../Errors/handleCastError';
import { IGenericErrorMessages } from '../interfaces/Errors/genericErrorResponse';

const GlobalEmailHandleMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode = 400;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessages[] = [];

  // eslint-disable-next-line no-console
  // config.env === 'development'
  //   ? console.log('From Global error handler``', err)
  //   : logger.error('From Global error handler``', err);

  if (err?.name === 'ValidationError' || err instanceof Error.ValidatorError) {
    const getValidationError = validationErrorHandle(err);
    statusCode = getValidationError?.statusCode || statusCode;
    message = getValidationError?.messages;
    errorMessages = getValidationError?.errorMessages;
  } else if (err?.name === 'CastError') {
    const castErr = handleCastError(err);
    statusCode = castErr.statusCode;
    message = castErr.messages;
    statusCode = castErr.statusCode;
    errorMessages = castErr.errorMessages;
  } else if (err instanceof Error) {
    message = err.message;
    errorMessages = [{ path: '', message: '' }];
  } else if (err instanceof ZodError) {
    const zodValidationError = handleZodError(err);
    message = zodValidationError.messages;
    statusCode = zodValidationError.statusCode;
    errorMessages = zodValidationError.errorMessages;
  } else if (err instanceof MyError) {
    message = err.message;
    statusCode = err.myStatus;
    errorMessages = [{ path: '', message: '' }];
  }

  res.status(statusCode).json({
    status: 'False',
    message,
    errorMessages,
    stacks: config.env !== 'production' ? err?.stack : undefined,
  });
  next();
};

export default GlobalEmailHandleMiddleware;
