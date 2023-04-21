export class Article {
    id: string;
    slug: string;
    title: string;
    author: string;
    privacy?: 'public' | 'private';
    content: string;
    updatedAt: string;
}