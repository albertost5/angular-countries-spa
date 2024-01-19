import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../interfaces/country';
import {catchError, delay, map, Observable, of} from 'rxjs';
import {Region} from '../interfaces/region.type';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public basePath: string = 'https://restcountries.com/v3.1'

  constructor(private readonly http: HttpClient) {
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(err => of([]))
    )
  }

  searchByCapital(capitalName: string): Observable<Country[]> {
    const url = `${this.basePath}/capital/${capitalName}`;

    return this.getCountriesRequest(url);
  }

  searchByCountry(countryName: string): Observable<Country[]> {
    const url = `${this.basePath}/name/${countryName}`;

    return this.getCountriesRequest(url);
  }

  searchByRegion(regionName: Region): Observable<Country[]> {
    const url = `${this.basePath}/region/${regionName}`;

    return this.getCountriesRequest(url);
  }

  searchByCountryId(countryId: string): Observable<Country | null> {
    const url = `${this.basePath}/alpha/${countryId}`;

    return this.http.get<Country[]>(url).pipe(
      map(countries => countries[0]),
      catchError(err => of(null))
    );
  }
}
