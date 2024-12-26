import { TBlogPost } from './blog.interface';
import BlogPostModel from './blog.model';

const getAllBlogFromDB = async () => {
  const result = await BlogPostModel.find();
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogPostModel.findById(id);
  return result;
};
const createBlogIntoDB = async (payload: TBlogPost) => {
  const result = await BlogPostModel.create(payload);
  return result;
};
const deleteBlogFrom = async (id: string) => {
  const result = await BlogPostModel.findByIdAndDelete(id);
  return result;
};
const updateBlogIntoDB = async (payload: TBlogPost, id: string) => {
  const result = await BlogPostModel.findByIdAndUpdate({ _id: id }, payload, {new:true});
  return result;
};

export const blogServices = {
  getAllBlogFromDB,
  getSingleBlogFromDB,
  createBlogIntoDB,
  deleteBlogFrom,
  updateBlogIntoDB,
};
