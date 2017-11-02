import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MdDialog, MdDialogRef, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';

import { CommentsService } from './../comments.service';
import { Comment } from './../comment';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() submitComment: EventEmitter<Object> = new EventEmitter();
  
  public content:string;
  
  ngOnInit(): void {}

  constructor() { }

  submit(form: FormGroup): void {
      this.submitComment.emit(form.value);
    }

}

@Component({
  templateUrl: './comment-form-dialog.html'
})

export class CommentFormDialog {

  constructor(
    private _commentsService: CommentsService,
    public dialogRef: MdDialogRef<CommentFormDialog>,
    public dialog: MdDialog,
    @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(comment){
    let _comment = Comment.fromJson({
      "content": comment.content,
      "post": this.data.post
    })

    this._commentsService.post(_comment).subscribe(
      result => {
        if(result){
          this.dialogRef.close(result);
          this.snackBar.open('Comment saved OK', '', { duration: 5000 });
        }
      },
      error => {
        this.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
        this.dialogRef.close();        
      }
    )
  }

}