import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { blogServices } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';
import AppError from '../../errors/AppErrors';

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getAllBlogFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost retrived successfully',
    data: result,
  });
});
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogServices.getSingleBlogFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost created successfully',
    data: result,
  });
});
const createBlog = catchAsync(async (req: Request, res: Response) => {
 const {userID} = req.user;
 if(!userID){
  throw new AppError(401, "Invalid author")
  }
 const data = {...req.body,author: userID};
 console.log(data)
  const result = await blogServices.createBlogIntoDB(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost created successfully',
    data: result,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const {userID} = req.user;
  const result = await blogServices.deleteBlogFrom(id,userID);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost deleted successfully',
    data: result,
  });
});
const UpdateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const {userID} = req.user;
  const payload = req.body;
  const result = await blogServices.updateBlogIntoDB(payload, id,userID);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost updated successfully',
    data: result,
  });
});

export const blogController = {
  getAllBlog,
  getSingleBlog,
  createBlog,
  deleteBlog,
  UpdateBlog,
};
