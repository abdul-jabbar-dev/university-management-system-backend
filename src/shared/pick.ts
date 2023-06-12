import { SortOrder } from 'mongoose';
import { TPaginationAndSortOptions, TPaginationOption } from '../interfaces/paginationOption';

const pickQuery = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[]
): Partial<T> => {

  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

export const paginationOption = (options: TPaginationOption):TPaginationAndSortOptions => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 10);
  let sortBy: string = options.sortBy || 'createdAt';
  let sortOrder: SortOrder = 'asc';
  if (sortBy[0] == '-') {
    sortOrder = 'desc';
    sortBy = sortBy.substring(1);
  }
  if (sortBy[0] == '+') {
    sortBy = sortBy.substring(1);
  }

  return {
    limit,
    page,
    skip: (page - 1) * limit,
    sortBy,
    sortOrder,
  };
};

export default pickQuery;
