import z from 'zod';
import studentConstant from './student.constant';

export const createStudentZodValidator = z.object({
  password: z.string().optional(),
  student: z.object({
    name: z.object({
      firstName: z.string(),
      middleName: z.string().optional(),
      lastName: z.string(),
    }),
    gender: z.enum([...studentConstant.GENDER] as [string, ...string[]]),
    dateOfBirth: z.string().refine(value => /^\d{2}-\d{2}-\d{4}$/.test(value), {
      message: 'Invalid birth date format. Please use the format DD-MM-YYYY',
    }),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    bloodGroup: z.enum([...studentConstant.BLOODGROUP] as [
      string,
      ...string[]
    ]).optional(),
    guardian: z.object({
      fatherName: z.string(),
      fatherOccupation: z.string().optional(),
      fatherContactNo: z.string(),
      motherName: z.string(),
      motherOccupation: z.string().optional(),
      motherContactNo: z.string(),
      address: z.string(),
    }),
    localGurdian: z.object({
      name: z.string(),
      occupation: z.string().optional(),
      contactNo: z.string(),
      address: z.string(),
    }),
    academicSemester: z.string(),
    academicDepartment: z.string(),
    academicFaculty: z.string(),
  }),
});
