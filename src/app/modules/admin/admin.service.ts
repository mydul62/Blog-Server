import { TAdmin } from "./admin.interface";
import adminModel from "./admin.model";


const createAdminIntoDB =(payload:TAdmin)=>{
 const result = adminModel.create(payload);
 return result;
}

export const AdminServices = {
  createAdminIntoDB,
}