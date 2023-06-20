import { ZodError } from 'zod';
/* eslint-disable no-console */
import { IGenericErrorMessages, IGenericErrorResponse } from '../interfaces/Errors/genericErrorResponse';


const handleZodError = (err: ZodError): IGenericErrorResponse => {
  const returnError: IGenericErrorResponse = {
    statusCode:
      typeof err.errors[0].code !== 'number' ? 400 : err.errors[0]?.code,
    messages: err.name,
    errorMessages: err?.errors?.map((er): IGenericErrorMessages => {
      return { path: er.path.join(), message: er.message };
    }),
  };
  return returnError;
};

export default handleZodError;
