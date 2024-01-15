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

  searchCapital(capitalName: string): Observable<Country[]> {
    const url = `${this.basePath}/capital/${capitalName}`;
    
    return this.http.get<Country[]>(url).pipe(
      catchError(err => of([]))
    );
  }
}
