"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServices = void 0;
const admin_model_1 = __importDefault(require("./admin.model"));
const user_model_1 = __importDefault(require("../user/user.model"));
const createAdminIntoDB = (payload) => {
    const result = admin_model_1.default.create(payload);
    return result;
};
const blockUserIntoDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    let updateData = null;
    if (updatedData === 'block') {
        updateData = { isBlocked: true };
    }
    else if (updatedData === 'unblock') {
        updateData = { isBlocked: false };
    }
    else {
        throw new Error("Invalid updatedData value. Must be 'block' or 'unblock'.");
    }
    const result = yield user_model_1.default.findByIdAndUpdate(id, updateData, { new: true });
    if (!result) {
        throw new Error("Admin not found or unable to update");
    }
    return result;
});
exports.AdminServices = {
    createAdminIntoDB,
    blockUserIntoDB,
};
