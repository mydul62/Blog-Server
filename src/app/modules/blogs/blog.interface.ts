import { Types } from "mongoose";


export type TBlogPost = {
  title: string;
  content: string;
  author:Types.ObjectId;
  isPublished: boolean;
}


