import { EUser_role } from './user.enums';
import UserService from './user.service';

const generateStudentId = async (academicSemister: { year: string }) => {
  try {
    const lastId =
      (await UserService.getLastUserIdDB([EUser_role.STUDENT])) ||
      (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(lastId) + 1).toString().padStart(5, '0');
    incrementalId = `${academicSemister.year.substring(2)}${incrementalId}`;
    return incrementalId;
  } catch (error) {
    throw new Error('Something went wrong to create user id');
  }
};
const generateFacultyId = async () => {
  try {
    const lastId =
      (await UserService.getLastUserIdDB([EUser_role.FACULTY])) ||
      (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(lastId) + 1).toString().padStart(5, '0');
    incrementalId = `F${incrementalId}`;
    return incrementalId;
  } catch (error) {
    throw new Error('Something went wrong to create user id');
  }
};
const generateAdminId = async () => {
  try {
    const lastId =
      (await UserService.getLastUserIdDB([
        EUser_role.ADMIN,
        EUser_role.SUPER_ADMIN,
      ])) || (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(lastId) + 1).toString().padStart(5, '0');
    incrementalId = `A${incrementalId}`;
    return incrementalId;
  } catch (error) {
    throw new Error('Something went wrong to create user id');
  }
};

const UserUtils = {
  generateStudentId,
  generateFacultyId,
  generateAdminId,
};
export default UserUtils;
