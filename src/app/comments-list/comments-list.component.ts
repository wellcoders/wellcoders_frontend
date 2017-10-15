import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from './../comment';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() comments: Comment[];
  @Input() totalPages: number;
  @Input() pageSize: number;

  @Output() loadNextPageEvent: EventEmitter<number> = new EventEmitter<number>();
  
  private _comments: Comment[];
  
  constructor() { }

  ngOnInit() {
    
  }

  loadNextPage(data): void {
    const page = data.pageNumber;
    this.loadNextPageEvent.emit(page);
  }


}
