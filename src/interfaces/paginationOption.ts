import { SortOrder } from 'mongoose';
export type TPaginationOption = {
  page?: number;
  limit?: number;
  sortBy?: string;
};
export type TPaginationAndSortOptions = Required<TPaginationOption> & {
  sortBy: string;
  sortOrder: SortOrder;
  skip: number;
};
