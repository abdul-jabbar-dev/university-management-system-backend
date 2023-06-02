import config from '../../../config'
import { TUser } from './users.interface'
import USER from './users.model'
import { generateUserId } from './users.utils'

export const createUserDB = async (userInfo: TUser): Promise<TUser | null> => {
  // Auto genareting userId
  const userId = await generateUserId()
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

export const getUsersDB = async () => {
  const createdUser = await USER.find({})
  if (!createdUser) {
    throw new Error('Failed to Created user! ')
  }
  return createdUser
}

export const getLastUserId = async () => {
  try {
    const lastId = await USER.findOne({}, { id: 1, _id: 0 })
      .sort({ createdAt: -1 })
      .lean()
    return lastId?.id
  } catch (error) {
    throw new Error('Something went wrong to create user id')
  }
}
