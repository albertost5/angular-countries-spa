import {Component} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent {

  public countries: Country[] = [];
  constructor(private readonly countriesService: CountriesService) {
  }

  onValueSearchByCountry(searchTerm: string) {
    this.countriesService.searchByCountry(searchTerm)
      .subscribe(countries => this.countries = countries);
  }
}
