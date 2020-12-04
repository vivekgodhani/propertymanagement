import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { City } from './city.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  readonly baseurl='http://localhost:3000/city'
  constructor(private http:HttpClient) {
  }
  getCity()
  {
    return this.http.get<Array<City>>(this.baseurl);
  }
}
