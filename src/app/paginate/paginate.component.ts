import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "paginate",
  templateUrl: "./paginate.component.html",
  styleUrls: ["./paginate.component.css"]
})
export class PaginateComponent implements OnInit {
  @Input() page: number;
  @Output()
  loadNextPageEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  notifyLoadNextPage(pageNumber: number): void {
    console.log(
      `PaginateComponent: El componenente paginación de la página ${this
        .page} acaba de aparecer en el viewport. Se procede a cargar los artículos de esa página.`
    );
    this.loadNextPageEvent.emit(pageNumber);
  }
}
