import z from 'zod';
import academicSemesterConstant from './academicSemester.constant';

const AcademicSemesterZodValidator = z.object({
  body: z.object({
    title: z.enum(
      [...(academicSemesterConstant.TITLE as [string, ...string[]])],
      {
        required_error: 'Title is required',
      }
    ),
    year: z.number({ required_error: 'Year is required' }),
    code: z.enum(
      [...(academicSemesterConstant.CODE as [string, ...string[]])],
      {
        required_error: 'Code is required',
      }
    ),
    startMonth: z.enum(
      [...(academicSemesterConstant.MONTH as [string, ...string[]])],
      {
        required_error: 'Start Month is required',
      }
    ),
    endMonth: z.enum(
      [...(academicSemesterConstant.MONTH as [string, ...string[]])],
      {
        required_error: 'End Month is required',
      }
    ),
  }),
});

export default AcademicSemesterZodValidator;
