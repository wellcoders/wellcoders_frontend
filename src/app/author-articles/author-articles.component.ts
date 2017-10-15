import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "./../article";
import { User } from "./../user";
import { ArticleService } from "./../article.service";
import { ArticleWrapper } from "./../article-wrapper";

@Component({
  templateUrl: "./author-articles.component.html",
  styleUrls: ["./author-articles.component.css"]
})
export class AuthorArticlesComponent implements OnInit {
  status_published = 'PUB';
  articles: Article[];
  totalPages: number;
  pageSize: number;
  author: User;
  listName: string = ArticleWrapper.authorList;
  searchText: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        if (data.articles.articles.length > 0) {
          this.author = data.articles.articles[0].owner;
        }
        this.articles = data.articles.articles;
        this.totalPages = data.articles.totalPages;
        this.pageSize = data.articles.pageSize;
      }
    );

    this._activatedRoute
    .queryParams
    .subscribe(param => { this.searchText = param.q });
  }

  loadNextPage(pageNumber: number): void {
    this.articleService
      .getAuthorArticles(this.author.username, this.searchText, pageNumber, this.status_published)
      .subscribe(articleWrapper => {
        articleWrapper.articles.map(article => {
          this.articles.push(article);
        });
        this.totalPages = articleWrapper.totalPages;
      });
  }
}
