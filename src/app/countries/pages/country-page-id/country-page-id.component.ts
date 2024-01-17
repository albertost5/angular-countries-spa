import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country';
import {Subject, switchMap, takeUntil} from 'rxjs';

@Component({
  selector: 'countries-country-page-id',
  templateUrl: './country-page-id.component.html',
  styles: []
})
export class CountryPageIdComponent implements OnInit, OnDestroy {

  public country?: Country | null;
  private destroyed$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroyed$),
        switchMap(({countryId}) => this.countriesService.searchByCountryId(countryId))
      )
      .subscribe(country => {
        if(!country) return this.router.navigateByUrl('/by-capital');

        this.country = country;

        return;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();

  }
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly countriesService: CountriesService,
    private readonly router: Router
  ) {
  }
}
