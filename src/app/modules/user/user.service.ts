
import { TUser } from "./user.interface";
import userModel from "./user.model";

const createUserIntoDB =(payload:TUser)=>{
 const result = userModel.create(payload);
 return result;
}

export const userServices = {
 createUserIntoDB,
}