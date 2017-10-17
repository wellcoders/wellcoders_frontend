import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { Comment } from './../comment';
import { CommentFormDialog } from "./../comment-form/comment-form.component";
import { LocalStorageHandler } from './../local-storage-handler';
import { CommentsService } from "./../comments.service";

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})

export class CommentsListComponent extends LocalStorageHandler implements OnInit {

  @Input() totalPages: number;
  @Input() pageSize: number;
  @Input() post:number;

  private comments: Comment[];
  private _viewForm: Boolean = false;
  
  constructor(
    public dialog: MdDialog,
    private _commentsService: CommentsService,
    public snackBar: MdSnackBar,
    
  ) {
    super();
  }

  ngOnInit() {
    let self = this;
    this.comments = [];
    this._commentsService.getComments(this.post).subscribe(
      result => {
       self.totalPages = result.totalPages;
       self.pageSize = result.pageSize;

       result.comments.map(comment => {
         self.comments.push(comment);
       })
      },
     error => {
        self.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
     });

  }

  checkOpenComment(): void {
    if (this.user) {
      this._viewForm = true;
    } 
  }

  openCommentDialog(): void {
    let self = this;

    let dialogRef = this.dialog.open(CommentFormDialog, {
      width: '80%',
      data: {
        post: this.post
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        self.comments.unshift(result);
      }
    });
  }

  loadNextPage(data): void {
    const pageNumber = data.pageNumber;
    this._commentsService.getComments(this.post, pageNumber).subscribe(
      (commentWrapper => {
        commentWrapper.comments.map(comment => {
          this.comments.push(comment);
        })
      })
    )
  }

}
