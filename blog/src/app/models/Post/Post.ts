import { PostCategory } from "src/app/enums/PostCategory";

export class Post {
    public id: string;
    public image: string;
    public title: string;
    public description: string
    public content: string;
    public authorName: string;
    public authorId: string;
    public createdAt: string;
    public category: PostCategory
}