import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from './../article';
import { User } from './../user';
import { ArticleService } from './../article.service';
import { ArticleWrapper } from './../article-wrapper';

@Component({
  templateUrl: './author-articles.component.html',
  styleUrls: ['./author-articles.component.css']
})
export class AuthorArticlesComponent implements OnInit {

  articles: Article[];
  totalPages: number;
  pageSize: number;
  author: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
      this.articles = data.articles.articles;
      this.author = data.articles.articles[0].owner.username;
      this.totalPages = data.articles.totalPages;
      this.pageSize = data.articles.pageSize;
    });
  }

  loadNextPage(pageNumber: number): void {
    console.log(`Cargando artículos página ${pageNumber}`);
    this.articleService.getUserArticles(this.author, pageNumber).subscribe(articleWrapper => {
      articleWrapper.articles.map(article => {
        this.articles.push(article);
      });
    });
  }
}
