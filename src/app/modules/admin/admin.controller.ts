import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";
import BlogPostModel from "../blogs/blog.model";
import { blogServices } from "../blogs/blog.service";


const createAdmin = catchAsync(async (req:Request, res: Response) => {
  const result = await AdminServices.createAdminIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});
const deleteBlogByAdmin = catchAsync(async (req:Request, res: Response) => {
 const {id} = req.params;
  const result = await blogServices.deleteBlogFrom(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

export const adminController = {
  createAdmin,
  deleteBlogByAdmin
};