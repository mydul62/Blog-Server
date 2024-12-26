import express from 'express';
import { blogController } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { blogPostValidation } from './blog.validation';
const router = express.Router();

router.get('/', blogController.getAllBlog);
router.post(
  '/',
  validateRequest(blogPostValidation.createBlogPostZodSchema),
  blogController.createBlog,
);
router.get('/:id', blogController.getSingleBlog);
router.delete('/:id', blogController.deleteBlog);
router.patch(
  '/:id',
  validateRequest(blogPostValidation.UpdateBlogPostZodSchema),
  blogController.UpdateBlog,
);

export const blogRouters = router;
