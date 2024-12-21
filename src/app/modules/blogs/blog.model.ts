import { model, Schema } from "mongoose";
import { IContent, TBlogPost } from "./blog.interface";

const ContentSchema = new Schema<IContent>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  discription: { type: String, required: true },
});

const BlogPostSchema = new Schema<TBlogPost>({
  title: { type: String, required: true },
  content: { type: ContentSchema, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  isPublished: { type: Boolean, default: true },
},
{ timestamps: true }
);

const BlogPostModel = model<TBlogPost>("BlogPost", BlogPostSchema);

export default BlogPostModel;
