import { Component, OnInit, Input, Output, EventEmitter, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { CommentWrapper } from "./../comment-wrapper";
import { ArticleService } from "./../article.service";
import { User } from "./../user";
import { Comment } from "./../comment";
import { Category } from "./../category";
import { SessionStorageHandler } from './../local-storage-handler';
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ArticleCommon } from "./../article-common"
import { NativeWindow } from './../window';
import { ScrollService } from "./../scroll.service";

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent extends SessionStorageHandler implements OnInit {
  @Input() article: Article;

  private totalPages: number;
  private pageSize: number;

  constructor(private _activatedRoute: ActivatedRoute,
    private _articles: ArticleService,
    private _router: Router,
    public snackBar: MdSnackBar,
    public scrollService: ScrollService,
    @Inject(NativeWindow) private _window) {
      super();
    }

  ngOnInit() {
    let self = this;
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        if(data.articles && data.articles.count == 1) {
          this.article = data.articles.articles[0];
        } else {
          this._router.navigate(['404']);
        }
      },
    );
  }

  ngAfterViewInit() {
   this.scrollService.scrollToTop();
  }

  goToAuthorArticleList(username: string): void {
    ArticleCommon.navigateToAuthor(username, this._router);
  }

  goToCategoryArticleList(category: Category): void {
    ArticleCommon.navigateToCategory(category, this._router);
  }

  goToEditArticle(article: Article): void {
    this._router.navigate([`/article/${article.owner.username}/${article.titleSlug}/edit`]);
  }

  deleteArticle(article: Article): void{
    this._articles.deleteArticle(article).subscribe(
      success => {
        this.snackBar.open('Your article has been deleted :(', '', { duration: 5000 });
      }
    );
  }

  favoriteClicked(article: Article): void{
    this._articles.favoriteClicked(article).subscribe(
      success => {
        this.article.is_favorite=!this.article.is_favorite;
      }
    );
  }  

  plainTextToHtml(text: string): string {
    return ArticleCommon.plainTextToHtml(text);
  }


}
