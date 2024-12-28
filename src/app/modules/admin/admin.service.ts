import { string } from "zod";
import { TAdmin } from "./admin.interface";
import adminModel from "./admin.model";
import userModel from "../user/user.model";


const createAdminIntoDB =(payload:TAdmin)=>{
 const result = adminModel.create(payload);
 return result;
}

const blockUserIntoDB = async (id: string, updatedData: string) => {
    let updateData: { isBlocked: boolean } | null = null;

    if (updatedData === 'block') {
      updateData = { isBlocked: true };
    } else if (updatedData === 'unblock') {
      updateData = { isBlocked: false };
    } else {
      throw new Error("Invalid updatedData value. Must be 'block' or 'unblock'.");
    }

    const result = await userModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } 
    );

    if (!result) {
      throw new Error("Admin not found or unable to update");
    }

    return result;
 
};

export const AdminServices = {
  createAdminIntoDB,
  blockUserIntoDB,
}