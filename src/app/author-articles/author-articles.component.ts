import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "./../article";
import { User } from "./../user";
import { ArticleService } from "./../article.service";
import { ArticleWrapper } from "./../article-wrapper";
import { ArticleCommon } from './../article-common';
import { SessionStorageHandler } from './../local-storage-handler';
import { ScrollService } from "./../scroll.service";

@Component({
  templateUrl: "./author-articles.component.html",
  styleUrls: ["./author-articles.component.css"]
})
export class AuthorArticlesComponent extends SessionStorageHandler implements OnInit  {
  articles: Article[];
  totalPages: number;
  pageSize: number;
  count: number;
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
    public scrollService: ScrollService
  ) { super(); }

  

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper, currentSelection: string}) => {
        let currentSelection = this.currentStatus;
        if (data.articles.articles.length > 0) {
          this.author = data.articles.articles[0].owner;
        }
        this.count = data.articles.count;
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
        this.currentStatus = param.status?ArticleCommon.statusValues[param.status]:ArticleCommon.statusValues.published;
        this.currentAuthorUsername = param.username
        this.setHeader();
      });
  }

  ngAfterViewInit() {
    this.scrollService.scrollToTop();
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
        case ArticleCommon.statusValues.published: {
          if (!this.currentAuthorUsername) {
            this.title = `Mis favoritos`;
          } else if (this.user && this.user.user.username == this.currentAuthorUsername) {
            this.title = `Mis artículos`;
          } else {
            this.title = `Articulos de ${this.currentAuthorUsername}`
          }
        } break;
        case ArticleCommon.statusValues.drafts: {
          this.title = `Mis borradores`;
        } break;
        case ArticleCommon.statusValues.deleted: {
          this.title = `Mis artículos eliminados`;
        } break;
      }
    } else {
      switch (this.currentStatus) {
        case ArticleCommon.statusValues.published: {
          if (!this.currentAuthorUsername) {
            this.title = `No hay favoritos`;
          } else if (this.user.user.username == this.currentAuthorUsername) {
            this.title = `No has publicado ningún artículo`;
          } else {
            this.title = `No hay artículos de ${this.author.first_name} ${this.author.last_name}`
          }
        } break;
        case ArticleCommon.statusValues.drafts: {
          this.title = `No hay borradores`;
        } break;
        case ArticleCommon.statusValues.deleted: {
          this.title = `No hay artículos eliminados`;
        } break;
      }
    }
    this.subtitle = "";
    if(this.searchText) {
      this.subtitle = `- ${this.count} contienen ${this.searchText}`;
    }
  }
}
