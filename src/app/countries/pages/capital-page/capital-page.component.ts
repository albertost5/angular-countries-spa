import {Component, OnDestroy} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'countries-capital-page',
  templateUrl: './capital-page.component.html',
  styles: []
})
export class CapitalPageComponent implements OnDestroy {

  public capitals: Country[] = [];
  private destroyed$: Subject<void> = new Subject<void>();

  onValueSearchByCapital(searchTerm: string) {
    this.countriesService.searchByCapital(searchTerm)
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(capitals => this.capitals = capitals);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  constructor(private readonly countriesService: CountriesService) {
  }
}
