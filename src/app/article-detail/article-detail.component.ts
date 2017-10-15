import { Component, OnInit, Input, Output, EventEmitter, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { ArticleService } from "./../article.service"
import { User } from "./../user";
import { Category } from "./../category";
import { LocalStorageHandler } from './../local-storage-handler';
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ArticleCommon } from "./../article-common"
import { NativeWindow } from './../window';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent extends LocalStorageHandler implements OnInit {
  @Input() article: Article;

  constructor(private _activatedRoute: ActivatedRoute,
    private _articles: ArticleService,
    private _router: Router,
    public snackBar: MdSnackBar,
    @Inject(NativeWindow) private _window) {
      super();
    }

  ngOnInit() {
    this._window.scrollTo(0, 0);
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        if(data.articles && data.articles.count == 1) {
          this.article = data.articles.articles[0];
        } else {
          this._router.navigate(['404']);
        }
      },
      /*error => {
        this._router.navigate(['404']);
      }*/
    );
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
        this.snackBar.open('Your article has been deleted :(', '', { duration: 5000 });
      }
    );
  }

  plainTextToHtml(text: string): string {
    return ArticleCommon.plainTextToHtml(text);
  }
}
