import { Model, Types } from 'mongoose';
import { EUser_role } from './user.enums';
import { TStudent } from '../student/student.interface';
export type TUser_role = EUser_role;
export type TUser = {
  id?: string;
  name: string;
  role: TUser_role;
  password?: string;
  student: Types.ObjectId | TStudent;
  // faculty: Types.ObjectId | TFaculty;
  // admin: Types.ObjectId | TAdmin;
};
export type UserType = Model<TUser, object>;
