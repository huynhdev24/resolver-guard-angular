import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { ArticleService } from "./article.service";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CanEditArticleGuard implements CanActivate {
    constructor(private userService: UserService, private articleService: ArticleService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.articleService.getArticleBySlug(next.paramMap.get('slug').pipe(
            map(article => article.author === this.userService.currentUser.username)
        );
    }
}