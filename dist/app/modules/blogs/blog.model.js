"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogPostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    isPublished: { type: Boolean, default: true },
}, { timestamps: true });
const BlogPostModel = (0, mongoose_1.model)("BlogPost", BlogPostSchema);
exports.default = BlogPostModel;
