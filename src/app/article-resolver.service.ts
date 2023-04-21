import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from "rxjs";
import { Article } from "./model/article";
import { ArticleService } from './article/article.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleResolver implements Resolve<Article> {

    constructor(private articleService: ArticleService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article | Observable<Article> | Promise<Article> {
        const slug = route.paramMap.get('slug');
        return this.articleService.getArticleBySlug(slug);
    }
}