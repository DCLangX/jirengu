declare class CreateTagDto {
    title: string;
}
export declare class TagController {
    index(): Promise<import("@typegoose/typegoose").DocumentType<import("./post.model").Tag>[]>;
    create(createTagDto: CreateTagDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./post.model").Tag>>;
    update(id: string, updatePostDto: CreateTagDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
