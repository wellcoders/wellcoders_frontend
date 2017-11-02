import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dragitem',
  templateUrl: './dragitem.component.html',
  styleUrls: ['./dragitem.component.css']
})
export class DragitemComponent implements OnInit {
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

}
