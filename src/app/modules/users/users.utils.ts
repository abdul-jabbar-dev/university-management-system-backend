import { getLastUserId } from './users.service'

export const generateUserId = async () => {
  try {
    const lastId = (await getLastUserId()) || (0).toString().padStart(5, '0')
    const incrementalId = (parseInt(lastId) + 1).toString().padStart(5, '0')
    return incrementalId
  } catch (error) {
    throw new Error('Something went wrong to create user id')
  }
}
