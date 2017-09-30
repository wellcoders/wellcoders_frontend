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
    console.log(
      `PaginateComponent: El componente paginación de la página ${pageNumber} del listado de ${listName} artículos acaba de aparecer en el viewport. Se emite el evento al componente padre.`
    );
    this.loadNextPageEvent.emit({ pageNumber, listName });
  }
}
