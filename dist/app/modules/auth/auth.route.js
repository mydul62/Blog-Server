"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = (0, express_1.Router)();
router.post('/register', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.AuthRegistrationzodSchema), auth_controller_1.AuthControllers.userRegister);
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.userLoginvalidationzodShema), auth_controller_1.AuthControllers.userLogin);
exports.authRouter = router;
