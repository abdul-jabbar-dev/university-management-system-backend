import mongoose from 'mongoose';
import {
  AcademicSemisterModel,
  TAcademicSemister,
} from './academicSemester.interface';
import academicSemesterConstant from './academicSemester.constant';
import MyError from '../../../Errors';

const academicSemisterSchema = new mongoose.Schema<TAcademicSemister>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterConstant.TITLE,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterConstant.CODE,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterConstant.MONTH,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterConstant.MONTH,
    },
  },
  { timestamps: true }
);

academicSemisterSchema.pre('save', async function (next) {
  const exist = await ACADEMINSEMESTER.find({
    year: this.year,
    title: this.title,
  }); 
  if (exist.length > 0) {
    throw new MyError(
      409,
      'Semester ' + this.title + ' ' + this.year + ' is already exist!'
    );
  } else {
    next();
  }
});

const ACADEMINSEMESTER = mongoose.model<
  TAcademicSemister,
  AcademicSemisterModel
>('AcademicSemester', academicSemisterSchema);
export const academicSemesterFields = Object.keys(ACADEMINSEMESTER.schema.obj);
export default ACADEMINSEMESTER;
