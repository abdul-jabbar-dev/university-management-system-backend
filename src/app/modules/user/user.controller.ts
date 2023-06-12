import { RequestHandler } from 'express';
import { TUser } from './user.interface';
import UserService from './user.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const { name, id, password, role } = req.body;
  const result: TUser | null = await UserService.createUserDB({
    name,
    id,
    password,
    role,
  });

  sendResponse(res, {
    statusCode: 200,
    data: result,
    message: 'User create successfully',
  });
});

const getUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.getUsersDB();
  sendResponse(res, {
    statusCode: 200,
    data: result,
    message: 'User fetch successfully',
  });
});


 
const UserController = {
  getUser,
  createUser,
};
export default UserController;
