import {Component} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'countries-capital-page',
  templateUrl: './capital-page.component.html',
  styles: []
})
export class CapitalPageComponent {

  constructor(private readonly countriesService: CountriesService) {
  }

  public capitals: Country[] = [];

  onValueSearchByCapital(searchTerm: string) {
    this.countriesService.searchCapital(searchTerm)
      .subscribe(capitals => this.capitals = capitals);
  }
}
