import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Country } from './country.model';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly baseurl='http://localhost:3000/country'
  constructor(private http:HttpClient) {
  }
  getCountry()
  {
    return this.http.get<Array<Country>>(this.baseurl);
  }
}
