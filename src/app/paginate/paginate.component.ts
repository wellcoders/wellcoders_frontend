import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "paginate",
  templateUrl: "./paginate.component.html",
  styleUrls: ["./paginate.component.css"]
})
export class PaginateComponent implements OnInit {
  @Input() page: number;
  @Input() list: string;
  @Input() listName: string;
  @Output() loadNextPageEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  notifyLoadNextPage(pageNumber: number, listName: string): void {
    this.loadNextPageEvent.emit({ pageNumber, listName });
  }
}
