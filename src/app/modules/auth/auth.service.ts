import AppErrors from '../../errors/AppErrors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TUser } from './auth.interface';
import userModel from '../user/user.model';
import config from '../../config';
dotenv.config();
const userRegisterService = async (payload: TUser) => {
  const result = await userModel.create(payload);

  return result;
};
const userLoginService = async (payload: TUser) => {
  const RegisterUser = await userModel.findOne({ email: payload.email });
  if (!RegisterUser) {
    throw new AppErrors(404, 'Invalid credential');
  }
  const matchPassword = await bcrypt.compare(
    payload.password,
    RegisterUser.password,
  );
  if (!matchPassword) {
    throw new AppErrors(401, 'Invalid credential');
  }
  const token = jwt.sign(
    {
      userID: RegisterUser._id,
      role: RegisterUser.role,
    },
    config.secret_token as string,
    { expiresIn: 60 * 60 },
  );
  return { token };
};
export const AuthService = {
  userRegisterService,
  userLoginService,
};