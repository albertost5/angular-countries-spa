import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../interfaces/country';
import {catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public basePath: string = 'https://restcountries.com/v3.1'

  constructor(private readonly http: HttpClient) {
  }

  searchByCapital(capitalName: string): Observable<Country[]> {
    const url = `${this.basePath}/capital/${capitalName}`;

    return this.http.get<Country[]>(url).pipe(
      catchError(err => of([]))
    );
  }

  searchByCountry(countryName: string): Observable<Country[]> {
    const url = `${this.basePath}/name/${countryName}`;

    return this.http.get<Country[]>(url).pipe(
      catchError(err => of([]))
    );
  }

  searchByRegion(regionName: string): Observable<Country[]> {
    const url = `${this.basePath}/region/${regionName}`;

    return this.http.get<Country[]>(url).pipe(
      catchError(err => of([]))
    );
  }
}
