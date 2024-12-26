import {  model, Schema } from "mongoose";
import {  TBlogPost } from "./blog.interface";


const BlogPostSchema = new Schema<TBlogPost>({
  title: { type: String, required: true },
  content: {type: String, required: true},
  // author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  author:{type:String , required: true},
  isPublished: { type: Boolean, default: true },
},
{ timestamps: true }
);

const BlogPostModel = model<TBlogPost>("BlogPost", BlogPostSchema);

export default BlogPostModel;
