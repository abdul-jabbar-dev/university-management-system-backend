import { Router } from 'express';
import UserController from './user.controller';
import validateRequest from '../../../middlewares/user/validateRequest';
import UserZodValidator from './user.zodValidate';
const UserRoute = Router();

UserRoute.post(
  '/create-user',
  validateRequest(UserZodValidator),
  UserController.createUser
);
UserRoute.get('/all-users', UserController.getUser);

export default UserRoute;
