import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiProperty } from "@nestjs/swagger";
import { TagModel } from "./post.model";
import { IsNotEmpty } from "class-validator";
class CreateTagDto {
  @ApiProperty({ description: "分类名称", example: "电影" })
  @IsNotEmpty({ message: "请填写名称" })
  title: string;
}

@ApiTags("分类")
@Controller('tag')
export class TagController {
  @Get()
  @ApiOperation({
    summary: "分类列表"
  })
  async index() {
    return await TagModel.find();
  }

  @Post()
  @ApiOperation({
    summary: "创建分类"
  })
  async create(@Body() createTagDto: CreateTagDto) {
    await TagModel.create(createTagDto);
    return { success: true };
  }

  @Get(":id")
  @ApiOperation({
    summary: "分类详情"
  })
  async detail(@Param("id") id: string) {
    return await TagModel.findById(id);
  }

  @Put(":id")
  @ApiOperation({
    summary: "编辑分类"
  })
  async update(@Param("id") id: string, @Body() updatePostDto: CreateTagDto) {
    await TagModel.findByIdAndUpdate(id, updatePostDto);
    return { success: true };
  }

  @Delete(":id")
  @ApiOperation({
    summary: "删除分类"
  })
  async remove(@Param("id") id: string) {
    await TagModel.findByIdAndDelete(id);
    return {
      success: true
    };
  }
}
