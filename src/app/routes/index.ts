import { Router } from "express";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { studentRouters } from "../modules/student/student.route";
import { UserRouter } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.router";
import { AcademicDepertmentRoutes } from "../modules/academicDepertment/academicDepertment.router";

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: studentRouters,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculies',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-depertment',
    route: AcademicDepertmentRoutes,
  },
];

moduleRoutes.forEach((route) =>  router.use(route.path,route.route));


export default router;