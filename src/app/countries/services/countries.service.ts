import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../interfaces/country.interface';
import {catchError, map, Observable, of, tap} from 'rxjs';
import {Region} from '../interfaces/region.type';
import {CountrieStore} from '../interfaces/countries-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public basePath: string = 'https://restcountries.com/v3.1'

  public countriesStore: CountrieStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountry: {
      term: '',
      countries: []
    },
    byRegion: {
      term: undefined,
      countries: []
    }
  }

  constructor(private readonly http: HttpClient) {
    this.loadFromLocalStore();
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(err => of([]))
    )
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.basePath}/capital/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.countriesStore.byCapital = {term, countries}),
        tap(() => this.saveToLocalStore())
      );
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.basePath}/name/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.countriesStore.byCountry = {term, countries}),
        tap(() => this.saveToLocalStore())
      );
  }

  searchByRegion(term: Region): Observable<Country[]> {
    const url = `${this.basePath}/region/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.countriesStore.byRegion = {term, countries}),
        tap(() => this.saveToLocalStore())
      );
  }

  searchByCountryId(countryId: string): Observable<Country | null> {
    const url = `${this.basePath}/alpha/${countryId}`;

    return this.http.get<Country[]>(url).pipe(
      map(countries => countries[0]),
      catchError(err => of(null))
    );
  }

  saveToLocalStore(): void {
    localStorage.setItem('countriesStore', JSON.stringify(this.countriesStore));
  }

  loadFromLocalStore(): void {
    if (!localStorage.getItem('countriesStore')) return;
    this.countriesStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }
}
