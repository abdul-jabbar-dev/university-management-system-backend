import mongoose from 'mongoose';
import { TUser, UserType } from './user.interface';

const userSchema = new mongoose.Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const USER = mongoose.model<TUser, UserType>('Users', userSchema);
export default USER;
