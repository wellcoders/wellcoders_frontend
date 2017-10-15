import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ArticleService } from "./../article.service";

@Component({
  selector: 'app-searched-articles',
  templateUrl: './searched-articles.component.html',
  styleUrls: ['./searched-articles.component.css']
})
export class SearchedArticlesComponent implements OnInit {
  articles: Article[];
  totalPages: number;
  pageSize: number;
  category: string;
  header: string;
  searchText: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this._activatedRoute
      .queryParams
      .subscribe(params => {
        this.searchText = params.q;
        this.search(this.searchText);
      });
  }

  search(text: string, page: number = 1): void {
    this.articleService
      .getArticles(text, page)
      .subscribe(articleWrapper => {
        this.header = `No se encontraron artículos - ${text}`;
        if (articleWrapper.articles.length > 0) {
          this.header = `${articleWrapper.articles.length} artículos contienen ${text}` ; 
        }
        this.articles = articleWrapper.articles;
        this.totalPages = articleWrapper.totalPages;
        this.pageSize = articleWrapper.pageSize;
      });
  }

  loadNextPage(pageNumber: number): void {
    this.articleService.getArticles(this.searchText, pageNumber).subscribe(articleWrapper => {
      articleWrapper.articles.map(article => {
        this.articles.push(article);
      });
      this.totalPages = articleWrapper.totalPages;
    });
  }
}
