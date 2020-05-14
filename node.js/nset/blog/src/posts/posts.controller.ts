import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiProperty } from "@nestjs/swagger";

class CreatePostDto {
  @ApiProperty({ description: "帖子标题" })
  title: string;
  @ApiProperty({ description: "帖子内容" })
  content: string;
}


@ApiTags("帖子")
@Controller("posts")
export class PostsController {
  @Get()
  @ApiOperation({
    summary: "显示博客列表"
  })
  index() {
    return [];
  }

  @Post()
  @ApiOperation({
    summary: "创建帖子"
  })
  create(@Body() body: CreatePostDto) {
    return body;
  }

  @Get(":id")
  @ApiOperation({
    summary: "帖子详情"
  })
  detail(@Param("id") id: string) {
    return {
      id,
      content: "hhhh"
    };
  }

  @Put(":id")
  @ApiOperation({
    summary: "编辑帖子"
  })
  update(@Param("id") id: string, @Body() body: CreatePostDto) {
    return {
      id,
      body,
      success: true
    };
  }

  @Delete(":id")
  @ApiOperation({
    summary: "删除帖子"
  })
  remove(@Param("id") id: string) {
    return {
      success: true
    };
  }
}
