import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country';
import {switchMap} from 'rxjs';

@Component({
  selector: 'countries-country-page-id',
  templateUrl: './country-page-id.component.html',
  styles: []
})
export class CountryPageIdComponent implements OnInit {

  public country?: Country | null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly countriesService: CountriesService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({countryId}) => this.countriesService.searchByCountryId(countryId))
      )
      .subscribe(country => {
        if(!country) return this.router.navigateByUrl('/by-capital');

        this.country = country;

        return;
      });
  }
}
