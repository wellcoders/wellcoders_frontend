import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Article } from "./../article";
import { User } from './../user';
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "./../../environments/environment";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];
  @Input() totalPages: number;
  @Input() pageSize: number;
  @Output()
  loadNextPageEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {}

  loadNextPage(page): void {
    console.log("ArticleListComponent: Reemitiendo el evento al componente padre");
    this.loadNextPageEvent.emit(page);
  }

  verAutoresPost(user: User): void {
    this._router.navigate([`/users/${user.username}/articles`]);
  }
}
