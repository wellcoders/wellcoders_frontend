import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from './../article';
import { User } from './../user';

@Component({
  templateUrl: './author-articles.component.html',
  styleUrls: ['./author-articles.component.css']
})
export class AuthorArticlesComponent implements OnInit {

  articles: Article[];

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { articles: Article[] }) => {
      this.articles = data.articles;
    });
  }

}
