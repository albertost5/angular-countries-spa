import {Component, OnDestroy} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent implements OnDestroy {

  public countries: Country[] = [];
  private destroyed$: Subject<void> = new Subject<void>();

  onValueSearchByCountry(searchTerm: string) {
    this.countriesService.searchByCountry(searchTerm)
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(countries => this.countries = countries);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  constructor(private readonly countriesService: CountriesService) {
  }
}
