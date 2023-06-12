import config from '../../../config'
import { TUser } from './user.interface'
import USER from './user.model'
import UserUtils from './user.utils'

const createUserDB = async (userInfo: TUser): Promise<TUser | null> => {
  // Auto genareting userId
  const userId = await UserUtils.generateUserId()
  userInfo.id = userId

  // Auto genareting password
  if (!userInfo.password) {
    userInfo.password = config.default_user_pass as string
  }
  const createdUser = await USER.create(userInfo)

  if (!createdUser) {
    throw new Error('Failed to Created user! ')
  }
  return createdUser
}

const getUsersDB = async () => {
  const allUser = await USER.find({})
  if (!allUser) {
    throw new Error('Failed to find user! ')
  }
  return allUser
}

const getLastUserIdDB = async () => {
  try {
    const lastId = await USER.findOne({}, { id: 1, _id: 0 })
      .sort({ createdAt: -1 })
      .lean()
    return lastId?.id
  } catch (error) {
    throw new Error('Something went wrong to create user id')
  }
}

const UserService = {
  createUserDB,
  getUsersDB,
  getLastUserIdDB,
}
export default UserService
