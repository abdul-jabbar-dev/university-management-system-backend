 
export interface IGenericErrorMessages {
  path: string;
  message: string;
} 
export type IGenericErrorResponse = {
  statusCode: number;
  messages: string;
  errorMessages: IGenericErrorMessages[];
};
