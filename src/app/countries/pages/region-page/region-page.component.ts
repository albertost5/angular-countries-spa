import {Component} from '@angular/core';
import {Country} from '../../interfaces/country';
import {CountriesService} from '../../services/countries.service';

@Component({
  selector: 'countries-region-page',
  templateUrl: './region-page.component.html',
  styles: []
})
export class RegionPageComponent {

  constructor(private readonly countriesService: CountriesService) {
  }

  public regions: Country[] = [];

  onValueSearchByRegion(searchTerm: string) {
    this.countriesService.searchByRegion(searchTerm)
      .subscribe(regions => this.regions = regions);
  }
}
