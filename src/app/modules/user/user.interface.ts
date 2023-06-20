import { Model } from 'mongoose';

export type TUser = {
  id?: string;
  name: string;
  role?: string;
  password?: string;
};
export type UserType = Model<TUser, object>;
