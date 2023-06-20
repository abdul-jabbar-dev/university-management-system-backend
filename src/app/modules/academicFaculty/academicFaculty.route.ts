import { Router } from 'express';
import academicFacultyController from './academicFaculty.controller';

const AcademicFacultyRoute = Router();

AcademicFacultyRoute.get('/', academicFacultyController.getAllFaculty);
AcademicFacultyRoute.get('/:id', academicFacultyController.getAFaculty);
AcademicFacultyRoute.delete('/:id', academicFacultyController.deleteAFaculty);
AcademicFacultyRoute.patch('/:id', academicFacultyController.updateAFaculty);

export default AcademicFacultyRoute;
