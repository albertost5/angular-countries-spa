import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit {
  @Input()
  placeholder: string = 'Search..'

  @Output()
  onValueSearch: EventEmitter<string> = new EventEmitter<string>();

  private term$: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.term$
      .pipe(
        debounceTime(300)
      )
      .subscribe(term => {
        console.log(term);
        this.onValueSearch.emit(term);
      });
  }

  onKeyUp(searchTerm: string) {
    this.term$.next(searchTerm);
  }
}
