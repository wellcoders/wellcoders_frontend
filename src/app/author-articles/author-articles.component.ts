import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "./../article";
import { User } from "./../user";
import { ArticleService } from "./../article.service";
import { ArticleWrapper } from "./../article-wrapper";
import { ArticleCommon } from './../article-common';
import { LocalStorageHandler } from './../local-storage-handler';

@Component({
  templateUrl: "./author-articles.component.html",
  styleUrls: ["./author-articles.component.css"]
})
export class AuthorArticlesComponent extends LocalStorageHandler implements OnInit  {
  articles: Article[];
  totalPages: number;
  pageSize: number;
  author: User;
  listName: string = ArticleWrapper.authorList;
  searchText: string;

  title: string;
  subtitle: string;

  currentStatus: string;
  currentAuthorUsername: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { super(); }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper, status: string }) => {
        if (data.articles.articles.length > 0) {
          this.author = data.articles.articles[0].owner;
        }
        this.articles = data.articles.articles;
        this.totalPages = data.articles.totalPages;
        this.pageSize = data.articles.pageSize;

        this.setHeader();
      }
    );

    this._activatedRoute
    .queryParams
    .subscribe(param => { 
      this.searchText = param.q
      this.setHeader();
     });

     this._activatedRoute
     .params
     .subscribe(param => {
        this.currentStatus = param.status?ArticleCommon.statusVaues[param.status]:ArticleCommon.statusVaues.published;
        this.currentAuthorUsername = param.username
        this.setHeader();
      });
  }

  loadNextPage(pageNumber: number): void {
    this.articleService
      .getAuthorArticles(this.author.username, this.searchText, pageNumber, this.currentStatus)
      .subscribe(articleWrapper => {
        articleWrapper.articles.map(article => {
          this.articles.push(article);
        });
        this.totalPages = articleWrapper.totalPages;
      });
  }

  setHeader(): void {
    if (this.articles.length>0 || this.searchText) {
      switch (this.currentStatus) {
        case ArticleCommon.statusVaues.published: {
          if (this.user && this.user.user.username == this.currentAuthorUsername) {
            this.title = `Mis artículos`;
          } else {
            this.title = `Articulos de ${this.currentAuthorUsername}`
          }
        } break;
        case ArticleCommon.statusVaues.drafts: {
          this.title = `Mis borradores`;
        } break;
        case ArticleCommon.statusVaues.deleted: {
          this.title = `Mis artículos eliminados`;
        } break;
      }
    } else {
      switch (this.currentStatus) {
        case ArticleCommon.statusVaues.published: {
          if (this.user.user.username == this.currentAuthorUsername) {
            this.title = `No has publicado ningún artículo`;
          } else {
            this.title = `No hay artículos de ${this.author.first_name} ${this.author.last_name}`
          }
        } break;
        case ArticleCommon.statusVaues.drafts: {
          this.title = `No hay borradores`;
        } break;
        case ArticleCommon.statusVaues.deleted: {
          this.title = `No hay artículos eliminados`;
        } break;
      }
    }
    this.subtitle = "";
    if(this.searchText) {
      this.subtitle = `- ${this.articles.length} contienen ${this.searchText}`;
    }
  }
}
