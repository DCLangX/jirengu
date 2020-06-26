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
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const post_model_1 = require("./post.model");
const class_validator_1 = require("class-validator");
let CreateTagDto = (() => {
    class CreateTagDto {
    }
    __decorate([
        swagger_1.ApiProperty({ description: "分类名称", example: "电影" }),
        class_validator_1.IsNotEmpty({ message: "请填写名称" }),
        __metadata("design:type", String)
    ], CreateTagDto.prototype, "title", void 0);
    return CreateTagDto;
})();
let TagController = (() => {
    let TagController = class TagController {
        async index() {
            return await post_model_1.TagModel.find();
        }
        async create(createTagDto) {
            await post_model_1.TagModel.create(createTagDto);
            return { success: true };
        }
        async detail(id) {
            return await post_model_1.TagModel.findById(id);
        }
        async update(id, updatePostDto) {
            await post_model_1.TagModel.findByIdAndUpdate(id, updatePostDto);
            return { success: true };
        }
        async remove(id) {
            await post_model_1.TagModel.findByIdAndDelete(id);
            return {
                success: true
            };
        }
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({
            summary: "分类列表"
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TagController.prototype, "index", null);
    __decorate([
        common_1.Post(),
        swagger_1.ApiOperation({
            summary: "创建分类"
        }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreateTagDto]),
        __metadata("design:returntype", Promise)
    ], TagController.prototype, "create", null);
    __decorate([
        common_1.Get(":id"),
        swagger_1.ApiOperation({
            summary: "分类详情"
        }),
        __param(0, common_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TagController.prototype, "detail", null);
    __decorate([
        common_1.Put(":id"),
        swagger_1.ApiOperation({
            summary: "编辑分类"
        }),
        __param(0, common_1.Param("id")), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, CreateTagDto]),
        __metadata("design:returntype", Promise)
    ], TagController.prototype, "update", null);
    __decorate([
        common_1.Delete(":id"),
        swagger_1.ApiOperation({
            summary: "删除分类"
        }),
        __param(0, common_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TagController.prototype, "remove", null);
    TagController = __decorate([
        swagger_1.ApiTags("分类"),
        common_1.Controller('tag')
    ], TagController);
    return TagController;
})();
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map