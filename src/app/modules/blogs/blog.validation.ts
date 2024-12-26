import { z } from 'zod';

const createBlogPostZodSchema = z.object({
  body: z.object({
    title: z.string().nonempty('Title is required'),
    content: z.string().nonempty('Content is required'),
    author: z.string().nonempty('Author is required'),
    isPublished: z.boolean(),
  }),
});
const UpdateBlogPostZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    author: z.string().optional(),
    isPublished: z.boolean().optional(),
  }),
});

export const blogPostValidation = {
  createBlogPostZodSchema,
  UpdateBlogPostZodSchema,
};
