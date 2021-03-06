import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  animations: [
    trigger('searchinput', [
      state('void', style({
        'transform': 'translateX(100%)',
        'opacity': 0
      })),
      state('hidden', style({
        'transform': 'translateX(100%)',
        'opacity': 0
      })),
      state('shown', style({
        'transform': 'translateX(0%)',
        'opacity': 1
      })),
      transition('hidden <=> shown', animate('600ms cubic-bezier(0.77, 0, 0.175, 1)'))
    ])
  ]
})
export class SearchBoxComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchInputAnimationState: string = 'hidden';
  
    showSearchInput(input: any): void {
      this.searchInputAnimationState = 'shown';
      input.focus();
    }
  
    hideSearchInput(e: FocusEvent): void {
      this.searchInputAnimationState = 'hidden';
      setTimeout(() => ((e.target || e.srcElement) as HTMLInputElement).value = '', 650);
    }
  
    notifySearch(e: KeyboardEvent) {
      if ((e.keyCode || e.which) === 13) {
        this.onSearch.emit(((e.target || e.srcElement) as HTMLInputElement).value);
      }
    }

}
