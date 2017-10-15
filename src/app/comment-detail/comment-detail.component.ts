import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageHandler } from './../local-storage-handler';

import { Comment } from './../comment';

@Component({
  selector: 'comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent  extends LocalStorageHandler implements OnInit {

  @Input('item') comment: Comment;  

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
