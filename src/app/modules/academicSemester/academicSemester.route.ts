import { Router } from 'express';
import validateRequest from '../../../middlewares/user/validateRequest';
import AcademicSemesterZodValidator from './academicSemester.zodValidate';
import academicSemesterController from './academicSemester.controller';
const AcademicSemisterRoute = Router();

AcademicSemisterRoute.get('/', academicSemesterController.getAllSemester);

AcademicSemisterRoute.get('/:id', academicSemesterController.getASemester);


AcademicSemisterRoute.patch('/:id', academicSemesterController.updateSemester);

AcademicSemisterRoute.post(
  '/create-semester',
  validateRequest(AcademicSemesterZodValidator),
  academicSemesterController.createSemester
);

export default AcademicSemisterRoute;
