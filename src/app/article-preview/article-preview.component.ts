import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { User } from "./../user";
import { Category } from "./../category";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { LocalStorageHandler } from "./../local-storage-handler"

@Component({
  selector: "article-preview",
  templateUrl: "./article-preview.component.html",
  styleUrls: ["./article-preview.component.css"]
})
export class ArticlePreviewComponent extends LocalStorageHandler implements OnInit {
  @Input() article: Article;
  @Input() user: User;
  @Output() whenAuthorSelected: EventEmitter<User> = new EventEmitter<User>();
  @Output() whenCategorySelected: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() whenEditArticle: EventEmitter<Article> = new EventEmitter<Article>();
  listName: string = ArticleWrapper.authorList;

  constructor() {
    super();
  }

  ngOnInit() {}

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }

  notifyAuthorSelected(user: User): void {
    this.whenAuthorSelected.emit(user);
  }

  notifyCategorySelected(category: Category): void {
    this.whenCategorySelected.emit(category);
  }

  notifyEditArticle(article: Article): void {
    this.whenEditArticle.emit(article);
  }
}
