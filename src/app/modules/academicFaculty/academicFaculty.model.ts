import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const ACADEMICFACULTY = model<TAcademicFaculty>(
  'academic_faculty',
  academicFacultySchema
);
export default ACADEMICFACULTY;
