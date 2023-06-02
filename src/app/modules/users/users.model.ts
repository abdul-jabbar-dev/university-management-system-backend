import mongoose from 'mongoose'
import { TUser, UserType } from './users.interface'

const userSchema = new mongoose.Schema<TUser>({
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
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
},{timestamps:true})
const USER = mongoose.model<TUser, UserType>('Users', userSchema)
export default USER
