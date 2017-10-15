import { Component, OnInit, Input, Output, EventEmitter, Inject } from "@angular/core";
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { User } from "./../user";
import { Category } from "./../category";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ActivatedRoute, Router, NavigationError } from "@angular/router";
import { environment } from "./../../environments/environment";
import { ArticleService } from "./../article.service"
import { MdSnackBar } from '@angular/material';
import { NativeWindow } from './../window';
import { ArticleCommon } from "./../article-common";

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
    private _articles: ArticleService,
    private _router: Router,
    public snackBar: MdSnackBar,
    @Inject(NativeWindow) private _window) {}

  ngOnInit(): void {
    this._window.scrollTo(0, 0);
  }

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
    ArticleCommon.navigateToAuthor(username, this._router);
  }

  goToCategoryArticleList(category: Category): void {
    ArticleCommon.navigateToCategory(category, this._router);
  }

  goToEditArticle(article: Article): void {
    this._router.navigate([`/article/${article.pk}/edit`]);
  }

  deleteArticle(article: Article): void{
    this._articles.deleteArticle(article).subscribe(
      success => {
        this.articles = this.articles.filter(x => x.pk != article.pk);
        this.snackBar.open('Your article has been deleted :(', '', { duration: 5000 });
      }
    );
  }

  goToDetail(article: Article): void {
    this._router.navigate([`/article/${article.owner.username}/${article.titleSlug}`]);
  }
}
