import { RequestHandler } from 'express';
import academicSemesterService from './academicSemester.service';
import { TAcademicSemister } from './academicSemester.interface';
import sendResponse from '../../../shared/sendResponse';
import pickQuery from '../../../shared/pick'; 
import { academicSemesterFields } from './academicSemester.model';
import { TResponseData } from '../../../interfaces/sendResponse';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const data: TAcademicSemister = req.body;
    const result = await academicSemesterService.createSemesterDB(data);
    sendResponse(res, {
      statusCode: 200,
      data: result,
      message: 'Semester create successfully',
    });
  } catch (error) {
    next(error);
  }
};

const getAllSemester: RequestHandler = async (req, res, next) => {
  try {
    const paginationsOption = pickQuery(req.query, ['limit', 'sortBy', 'page']);

    const searchFilters = pickQuery(req.query, [
      'searchTerm',
      ...academicSemesterFields,
    ]);

    const result: TResponseData<TAcademicSemister[]> =
      await academicSemesterService.getAllSemesterDB(
        paginationsOption,
        searchFilters
      );

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const academicSemesterController = {
  createSemester,
  getAllSemester,
};
export default academicSemesterController;
