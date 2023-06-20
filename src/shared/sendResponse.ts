import { Response } from 'express';

type TResponse<T> = {
  statusCode?: number;
  status?: 'True';
  message?: string;
  data?: T;
  meta?: { page: number; limit: number; total: number; dataFound?: number };
};

const sendResponse = <T>(res: Response, data: TResponse<T>): void => {
  const response: TResponse<T> = {
    status: 'True',
    message: data.message || undefined,
    data: data.data || null || undefined,
    meta: data.meta || null || undefined,
  };
  res.status(data.statusCode || 400).json(response);
};

export default sendResponse;
