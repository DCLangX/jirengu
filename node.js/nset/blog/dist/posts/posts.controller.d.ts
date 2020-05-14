declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): any[];
    create(body: CreatePostDto): CreatePostDto;
    detail(id: string): {
        id: string;
        content: string;
    };
    update(id: string, body: CreatePostDto): {
        id: string;
        body: CreatePostDto;
        success: boolean;
    };
    remove(id: string): {
        success: boolean;
    };
}
export {};
