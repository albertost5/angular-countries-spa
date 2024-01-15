import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent {
  @Input()
  placeholder: string = 'Search..'

  @Output()
  onValueSearch: EventEmitter<string> = new EventEmitter<string>();

  onEnter(searchTerm: string) {
    this.onValueSearch.emit(searchTerm);
  }
}
