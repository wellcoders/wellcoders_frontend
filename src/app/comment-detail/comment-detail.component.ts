import { Component, OnInit, Input } from '@angular/core';
import { SessionStorageHandler } from './../local-storage-handler';

import { Comment } from './../comment';

@Component({
  selector: 'comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent  extends SessionStorageHandler implements OnInit {

  @Input('item') comment: Comment;  

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
