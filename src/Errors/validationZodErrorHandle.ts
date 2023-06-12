import { ZodError } from 'zod';
/* eslint-disable no-console */
import { IGenericErrorResponse } from '../interfaces/Errors/genericErrorResponse';
import IGenericErrorMessage from '../interfaces/Errors/genericErrorMessage';

const validationZodErrorHandle = (err: ZodError): IGenericErrorResponse => {
  const returnError: IGenericErrorResponse = {
    statusCode:
      typeof err.errors[0].code !== 'number' ? 400 : err.errors[0]?.code,
    messages: err.name,
    errorMessages: err?.errors?.map((er): IGenericErrorMessage => { 
      return { path: er.path.join(), message: er.message };
    }),
  };
  return returnError;
};

export default validationZodErrorHandle;
