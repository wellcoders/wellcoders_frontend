import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MdDialog } from "@angular/material"
import { Article } from "./../article";
import { User } from "./../user";
import { Category } from "./../category";
import { ConfirmationDialog } from "./../confirmation-dialog/confirmation-dialog.component"
import { LocalStorageHandler } from './../local-storage-handler';

@Component({
  selector: 'article-actions-box',
  templateUrl: './article-actions-box.component.html',
  styleUrls: ['./article-actions-box.component.css']
})
export class ArticleActionsBoxComponent extends LocalStorageHandler implements OnInit {
  @Input() article: Article;
  @Input() user: User;
  @Output() whenCategorySelected: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() whenEditArticle: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() whenDeleteArticle: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(public dialog: MdDialog) {
    super();
  }

  ngOnInit() {

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
