import {
  TPaginationOption
} from '../../../interfaces/paginationOption';
import { TResponseData } from '../../../interfaces/sendResponse';
import { paginationOption } from '../../../shared/pick';
import { academicSemesterSearchField } from './academicSemester.constant';
import { TAcademicSemister } from './academicSemester.interface';
import ACADEMINSEMESTER from './academicSemester.model';

const createSemesterDB = async (
  payload: TAcademicSemister
): Promise<TAcademicSemister> => {
  const createdAS: TAcademicSemister = await ACADEMINSEMESTER.create(payload);
  return createdAS;
};

const getAllSemesterDB = async (
  paginationsParams: TPaginationOption,
  filters: { searchTerm?: string }
): Promise<TResponseData<TAcademicSemister[]>> => {
  const { searchTerm, ...filterData } = filters;
  const fields: Partial<TAcademicSemister> = filterData;
 

  const { skip, limit, page, sortBy, sortOrder } =
    paginationOption(paginationsParams);

  let search;

  if (searchTerm) {
    search = [
      {
        $or: academicSemesterSearchField.map(f => {
          if (f === 'year') {
            return {
              $expr: {
                $regexMatch: {
                  input: { $toString: '$' + f },
                  regex: searchTerm,
                },
              },
            };
          }
          return {
            [f]: { $regex: searchTerm, $options: 'i' },
          };
        }),
      },
    ];
  }
  if (fields) {
    if (search) {
      search = [...search, ...Array(fields)];
    } else search = [...Array(fields)];
  }
  const result = await ACADEMINSEMESTER.find({ $and: search })
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit).lean();
  const totalCount = await ACADEMINSEMESTER.countDocuments();
  return {
    meta: {
      page,
      limit,
      total: totalCount,
      dataFound:result.length
    },
    data: result,
  };
};

const academicSemesterService = {
  createSemesterDB,
  getAllSemesterDB,
};
export default academicSemesterService;
