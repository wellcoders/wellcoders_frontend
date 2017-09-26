import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from './../article';
import { User } from './../user';

@Component({
  templateUrl: './articles-by-author.component.html',
  styleUrls: ['./articles-by-author.component.css']
})
export class ArticlesByAuthorComponent implements OnInit {

  articles: Article[];
  author: User;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { articles: Article[] }) => {
      this.articles = data.articles;
      this.author = data.articles[0].owner;
    });
  }

}
