import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../article";
import { User } from './../user';
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];
  @Input() users: User[];

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: Article[] }) => (this.articles = data.articles)
    );
  }

  verAutoresPost(user: User): void {
    this._router.navigate([`/users/${user.username}/articles`]);
  }
}
