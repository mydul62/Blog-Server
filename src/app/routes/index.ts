import { Router } from "express";
import { blogRouters } from "../modules/blogs/blog.route";
import { userRoute } from "../modules/user/user.route";
import { adminRoute } from "../modules/admin/admin.route";
import { authRouter } from "../modules/auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    route: blogRouters,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/auth',
    route: authRouter,
  }
];

moduleRoutes.forEach((route) =>  router.use(route.path,route.route));


export default router;