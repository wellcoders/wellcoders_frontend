import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../article";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: Article[] }) => (this.articles = data.articles)
    );
  }
}
