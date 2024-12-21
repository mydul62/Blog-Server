import { ObjectId } from "mongodb";

 export type IContent={
 title:string,
 image:string,
 discription:string,
}

export type TBlogPost = {
  title: string;
  content: IContent;
  author: ObjectId;
  isPublished: boolean;
}


