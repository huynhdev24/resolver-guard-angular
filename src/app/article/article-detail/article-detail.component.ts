import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd } from "@angular/router";
import { ArticleService } from "../article.service";
import { Observable } from "rxjs";
import { Article } from "src/app/model/article";
import { map, switchMap } from "rxjs";

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
    articles$: Observable<Article>;
    constructor(private _route: ActivatedRoute, private _api: ArticleService) {}

    ngOnInit(): void {
        this.articles$ = this._route.data.pipe(
            map(data => data.article)
        )
    }
}