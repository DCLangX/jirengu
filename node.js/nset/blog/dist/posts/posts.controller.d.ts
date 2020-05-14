declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): Promise<import("@typegoose/typegoose").DocumentType<import("./post.model").Post>[]>;
    create(createPostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./post.model").Post>>;
    update(id: string, updatePostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
