import express from 'express';
import { adminController } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { adminValidation } from './admin.validation';
const router = express.Router();


router.post('/create-admin',validateRequest(adminValidation.adminValidationZodSchema),adminController.createAdmin);
router.post('/blogs/:id',validateRequest(adminValidation.adminValidationZodSchema),adminController.createAdmin);

export const adminRoute = router;