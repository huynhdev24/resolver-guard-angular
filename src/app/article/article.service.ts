import { Injectable } from "@angular/core";
import { Article } from "../model/article";
import { of, Observable } from "rxjs";
import { delay } from "rxjs";

const Articles: Article[] = [
    {
        id: '1',
        slug: 'bai-viet-1',
        title: 'Bai viet 1',
        content: 'Day la noi dung bai viet 1',
        updatedAt: '21/04/2023',
        author: 'Nguyen Van Huynh'
    },
    {
        id: '2',
        slug: 'bai-viet-2',
        title: 'Bai viet 2',
        content: 'Day la noi dung bai viet 2',
        updatedAt: '21/04/2023',
        author: 'Nguyen Van Huynh'
    },
];

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor() {}

    getArticles(): Observable<Article[]> {
        return of(Articles).pipe(delay(500));
    }

    getArticleBySlug(slug: string): Observable<Article> {
        let article = Articles.find(x => x.slug ===  slug)
        return of(article).pipe(delay(500));
    }
}
