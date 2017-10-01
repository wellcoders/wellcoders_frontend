import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { User } from "./../user";
import { Category } from "./../category";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "./../../environments/environment";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];
  @Input() totalPages: number;
  @Input() pageSize: number;
  @Input() listName: string;
  @Output() loadNextPageLastestArticlesEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() loadNextPageAuthorArticlesEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() loadNextPageCategoryArticlesEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {}

  loadNextPage(data): void {
    const listName = data.listName;
    const page = data.pageNumber;
    if (listName === ArticleWrapper.authorList) {
      this.loadNextPageAuthorArticlesEvent.emit(page);
    } else if (listName === ArticleWrapper.categoryList) {
      this.loadNextPageCategoryArticlesEvent.emit(page);
    } else {
      this.loadNextPageLastestArticlesEvent.emit(page);
    }
  }

  goToAuthorArticleList(username: string): void {
    this._router.navigate([`${username}`]);
  }

  goToCategoryArticleList(category: Category): void {
    this._router.navigate([`/tag/${category.name}`]);
  }
}
