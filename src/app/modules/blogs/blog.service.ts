import AppError from '../../errors/AppErrors';
import QueryMaker from '../../utils/quaryMaker';
import { TBlogPost } from './blog.interface';
import BlogPostModel from './blog.model';

const createBlogIntoDB = async (payload: TBlogPost) => {
  const result = (await BlogPostModel.create(payload)).populate('author');
  return result;
};
const getAllBlogFromDB = async (quary:Record<string , unknown>) => {
  const queryMaker = new QueryMaker(
    BlogPostModel.find().populate('author', ' _id name email role isBlocked'),
    quary,
  )
    .search(['title', 'content'])
    .sort()
    .filter();
  const result = await queryMaker.QueryModel;
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogPostModel.findById(id).populate('author',' _id name email role isBlocked' );
  return result;
};
const deleteBlogFrom = async (id: string,userID:string) => {
  const findData = await BlogPostModel.findById(id);

  if (!findData) {
    throw new AppError(404, 'Blog post not found');
  }
  if (findData.author.toString() !== userID) {
    throw new AppError(401, 'You do not have permission to delete this data');
  }
  const result = await BlogPostModel.findByIdAndDelete(id);
  return result;
};


const updateBlogIntoDB = async (
  payload: TBlogPost,
  id: string,
  userID: string,
) => {
  const findData = await BlogPostModel.findById(id);

  if (!findData) {
    throw new AppError(404, 'Blog post not found');
  }
  if (findData.author.toString() !== userID) {
    throw new AppError(401, 'You do not have permission to update this data');
  }

  const result = await BlogPostModel.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

export const blogServices = {
  getAllBlogFromDB,
  getSingleBlogFromDB,
  createBlogIntoDB,
  deleteBlogFrom,
  updateBlogIntoDB,
};
