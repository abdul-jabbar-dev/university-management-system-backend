import { Router } from 'express';
import validateRequest from '../../../middlewares/user/validateRequest';
import AcademicSemesterZodValidator from './academicSemester.zodValidate';
import academicSemesterController from './academicSemester.controller';
const AcademicSemisterRoute = Router();

AcademicSemisterRoute.post(
  '/create-semester',
  validateRequest(AcademicSemesterZodValidator),
  academicSemesterController.createSemester
);
AcademicSemisterRoute.get(
  '/all-semester',
  academicSemesterController.getAllSemester
);

export default AcademicSemisterRoute;
