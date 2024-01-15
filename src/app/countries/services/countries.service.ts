import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../interfaces/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public basePath: string = 'https://restcountries.com/v3.1'

  constructor(private readonly http: HttpClient) {
  }

  searchCapital(capitalName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.basePath}/capital/${capitalName}`);
  }
}
