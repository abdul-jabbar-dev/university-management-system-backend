import { RequestHandler } from 'express';
import sendResponse from '../../../shared/sendResponse';
import academicFacultyService from './academicFaculty.service';
import { TAcademicFaculty } from './academicFaculty.interface';

const getAllFaculty: RequestHandler = async (req, res, next) => {
  try {
    const result: TAcademicFaculty[] =
      await academicFacultyService.getFacultyDB();
    sendResponse(res, {
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAFaculty: RequestHandler = async (req, res, next) => {
  try {
    const result: TAcademicFaculty = await academicFacultyService.getAFacultyDB(
      req.params.params
    );
    sendResponse(res, {
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAFaculty: RequestHandler = async (req, res, next) => {
  try {
    const result: TAcademicFaculty =
      await academicFacultyService.deleteAFacultyDB(req.params.params);
    sendResponse(res, {
      data: result,
      message: 'Faculty delete successfully',
    });
  } catch (error) {
    next(error);
  }
};

const updateAFaculty: RequestHandler = async (req, res, next) => {
  try {
    const { ...updatedAcademicFaculty }: Partial<TAcademicFaculty> = req.body;
    const result: TAcademicFaculty =
      await academicFacultyService.updateAFacultyDB(
        req.params.params,
        updatedAcademicFaculty
      );
    sendResponse(res, {
      data: result,
      message: 'Faculty delete successfully',
    });
  } catch (error) {
    next(error);
  }
};

const academicFacultyController = {
  getAllFaculty,
  deleteAFaculty,
  getAFaculty,
  updateAFaculty,
};
export default academicFacultyController;
