import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent implements OnInit, OnDestroy {

  public storeByCountryTerm: string = '';
  public countries: Country[] = [];
  private destroyed$: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    this.storeByCountryTerm = this.countriesService.countriesStore.byCountry.term;
    this.countries = this.countriesService.countriesStore.byCountry.countries;
  }

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
