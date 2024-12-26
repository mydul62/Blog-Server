import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { blogServices } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getAllBlogFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost created successfully',
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
  const result = await blogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost created successfully',
    data: result,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await blogServices.deleteBlogFrom(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogpost deleted successfully',
    data: result,
  });
});
const UpdateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await blogServices.updateBlogIntoDB(payload, id);

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
