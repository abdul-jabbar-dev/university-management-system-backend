import { Schema } from 'mongoose';
import { Model } from 'mongoose';
import studentConstant from './student.constant';
export type Guardian = {
  fatherName: string;
  fatherOccupation?: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  occupation?: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender?: typeof studentConstant.GENDER;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: typeof studentConstant.BLOODGROUP;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  academicSemester: Schema.Types.ObjectId;
  academicDepartment: Schema.Types.ObjectId;
  academicFaculty: Schema.Types.ObjectId;
};
export type StudentrType = Model<TStudent, object>;
