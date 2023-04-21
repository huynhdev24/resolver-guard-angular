import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from "rxjs";
import { map } from "rxjs";

import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-article-edit',
    templateUrl: './article-edit.component.html',
    styleUrls: ['./article-edit.component.css'],
})
export class ArticleEditComponent implements OnInit {
    slug$ = this.activatedRoute.paramMap.pipe(
        map(params => params.get('slug'))
    );

    isEditing = false;

    constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog) {}

    ngOnInit(): void {
    }

    openDialog() {
        
    }
}