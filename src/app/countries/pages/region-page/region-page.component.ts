import {Component, OnDestroy} from '@angular/core';
import {Country} from '../../interfaces/country';
import {CountriesService} from '../../services/countries.service';
import {Subject, takeUntil} from 'rxjs';
import {Region} from '../../interfaces/region.type';

@Component({
  selector: 'countries-region-page',
  templateUrl: './region-page.component.html',
  styles: []
})
export class RegionPageComponent implements  OnDestroy {

  public regionsAvailable: Region[] =  ['Europe', 'Americas', 'Africa', 'Asia', 'Oceania'];
  public regions: Country[] = [];
  public regionSelected?: Region;
  private destroyed$: Subject<void> = new Subject<void>();

  onValueSearchByRegion(region: Region) {
    this.countriesService.searchByRegion(region)
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(regions => {
        this.regions = regions;
        this.regionSelected = region;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  constructor(private readonly countriesService: CountriesService) {
  }
}
