import express from 'express';
import { blogController } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { blogPostValidation } from './blog.validation';
import verifyToken from '../../middlewares/verifyAuth';
const router = express.Router();

router.get('/', blogController.getAllBlog);
router.post(
  '/',verifyToken('user'),
  validateRequest(blogPostValidation.createBlogPostZodSchema),
  blogController.createBlog,
);
router.get('/:id', blogController.getSingleBlog);
router.delete('/:id',verifyToken('user'), blogController.deleteBlog);
router.patch(
  '/:id',verifyToken('user'),
  validateRequest(blogPostValidation.UpdateBlogPostZodSchema),
  blogController.UpdateBlog,
);

export const blogRouters = router;
