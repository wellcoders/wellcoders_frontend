import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { User } from "./../user";
import { Category } from "./../category";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { LocalStorageHandler } from "./../local-storage-handler"
import { MdDialog } from "@angular/material"
import { ConfirmationDialog } from "./../confirmation-dialog/confirmation-dialog.component"

@Component({
  selector: "article-preview",
  templateUrl: "./article-preview.component.html",
  styleUrls: ["./article-preview.component.css"]
})
export class ArticlePreviewComponent extends LocalStorageHandler implements OnInit {
  @Input() article: Article;
  @Input() user: User;
  @Output() whenAuthorSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() whenCategorySelected: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() whenEditArticle: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() whenDeleteArticle: EventEmitter<Article> = new EventEmitter<Article>();
  listName: string = ArticleWrapper.authorList;

  constructor(public dialog: MdDialog) {
    super();
  }

  ngOnInit() {}

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }

  notifyAuthorSelected(user: string): void {
    this.whenAuthorSelected.emit(user);
  }

  notifyCategorySelected(category: Category): void {
    this.whenCategorySelected.emit(category);
  }

  notifyEditArticle(article: Article): void {
    this.whenEditArticle.emit(article);
  }

  notifyDeleteArticle(article: Article): void {
    let dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.whenDeleteArticle.emit(article);
      }
    });

  
  }
}
