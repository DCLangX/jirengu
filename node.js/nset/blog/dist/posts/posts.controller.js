"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const post_model_1 = require("./post.model");
const class_validator_1 = require("class-validator");
let CreatePostDto = (() => {
    class CreatePostDto {
    }
    __decorate([
        swagger_1.ApiProperty({ description: "帖子标题", example: "帖子标题1" }),
        class_validator_1.IsNotEmpty({ message: "请填写标题" }),
        __metadata("design:type", String)
    ], CreatePostDto.prototype, "title", void 0);
    __decorate([
        swagger_1.ApiProperty({ description: "帖子内容", example: "帖子内容" }),
        __metadata("design:type", String)
    ], CreatePostDto.prototype, "content", void 0);
    return CreatePostDto;
})();
let PostsController = (() => {
    let PostsController = class PostsController {
        async index() {
            return await post_model_1.PostModel.find();
        }
        async create(createPostDto) {
            await post_model_1.PostModel.create(createPostDto);
            return { success: true };
        }
        async detail(id) {
            return await post_model_1.PostModel.findById(id);
        }
        async update(id, updatePostDto) {
            await post_model_1.PostModel.findByIdAndUpdate(id, updatePostDto);
            return { success: true };
        }
        async remove(id) {
            await post_model_1.PostModel.findByIdAndDelete(id);
            return {
                success: true
            };
        }
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({
            summary: "帖子列表"
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "index", null);
    __decorate([
        common_1.Post(),
        swagger_1.ApiOperation({
            summary: "创建帖子"
        }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreatePostDto]),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "create", null);
    __decorate([
        common_1.Get(":id"),
        swagger_1.ApiOperation({
            summary: "帖子详情"
        }),
        __param(0, common_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "detail", null);
    __decorate([
        common_1.Put(":id"),
        swagger_1.ApiOperation({
            summary: "编辑帖子"
        }),
        __param(0, common_1.Param("id")), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, CreatePostDto]),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "update", null);
    __decorate([
        common_1.Delete(":id"),
        swagger_1.ApiOperation({
            summary: "删除帖子"
        }),
        __param(0, common_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "remove", null);
    PostsController = __decorate([
        swagger_1.ApiTags("帖子"),
        common_1.Controller("posts")
    ], PostsController);
    return PostsController;
})();
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map