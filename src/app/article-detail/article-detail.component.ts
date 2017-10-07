import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { ArticleService } from "./../article.service"
import { User } from "./../user";
import { Category } from "./../category";
import { LocalStorageHandler } from './../local-storage-handler'

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent extends LocalStorageHandler implements OnInit {
  @Input() article: Article;
  @Output() loadNextPageLastestArticlesEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() loadNextPageAuthorArticlesEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() loadNextPageCategoryArticlesEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _activatedRoute: ActivatedRoute,
    private _articles: ArticleService,
    private _router: Router,
    public snackBar: MdSnackBar) 
    {
      super();
    }

  ngOnInit() {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        if(data.articles.count == 1) {
          this.article = data.articles.articles[0];
        } else {
          this._router.navigate(['404']);
        }
      }, error => {
        this._router.navigate(['']);
        error = error.json();
        this.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
      }
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

}
