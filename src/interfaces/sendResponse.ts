export type TResponseData<T> = {
  meta?: {
    page: number;
    limit: number;
    total: number;
    dataFound?: number;
  };
  data?: T|null ;
};
