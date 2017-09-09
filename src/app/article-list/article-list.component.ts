import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../article";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {

  private newContent = Article.fromJson({
    id: 1,
    title: 'title',
    intro: 'intro',
    body: 'body'
  });

  @Input() articles: Article[] = [
    this.newContent
  ];

  constructor() {}

  ngOnInit() {}
}
