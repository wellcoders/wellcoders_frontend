import { Component, OnInit, Input, Output, EventEmitter, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { CommentWrapper } from "./../comment-wrapper";
import { ArticleService } from "./../article.service";
import { CommentsService } from "./../comments.service";
import { User } from "./../user";
import { Comment } from "./../comment";
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

  private _comments: Comment[];
  private totalPages: number;
  private pageSize: number;

  constructor(private _activatedRoute: ActivatedRoute,
    private _articles: ArticleService,
    private _commentsService: CommentsService,
    private _router: Router,
    public snackBar: MdSnackBar,
    @Inject(NativeWindow) private _window) {
      super();
      this._comments = [];
    }

  ngOnInit() {
    let self = this;
    this._window.scrollTo(0, 0);
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        if(data.articles && data.articles.count == 1) {
          this.article = data.articles.articles[0];
           this._commentsService.getComments(this.article).subscribe(
             result => {
              self.totalPages = result.totalPages;
              self.pageSize = result.pageSize;

              result.comments.map(comment => {
                self._comments.push(comment);
              })
             },
            error => {
               self.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
            });
        } else {
          this._router.navigate(['404']);
        }
      },
    );
  }

  goToAuthorArticleList(username: string): void {
    this._router.navigate([`${username}`]);
  }

  goToCategoryArticleList(category: Category): void {
    this._router.navigate([`/tag/${category.name}`]);
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

  loadNextPage(pageNumber: number): void {
    this._commentsService.getComments(this.article, pageNumber).subscribe(
      (commentWrapper => {
        commentWrapper.comments.map(comment => {
          this._comments.push(comment);
        })
      })
    )
  }

  processCommentWrapper = function(commentWrapper: CommentWrapper): void {
    this.totalPages = commentWrapper.totalPages;
    this.pageSize = commentWrapper.pageSize;
  
    commentWrapper.comments.map(comment => {
      this._comments.push(comment);
    })
  }
}
