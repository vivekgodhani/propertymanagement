import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { State } from './state.model';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  readonly baseurl='http://localhost:3000/State'
  constructor(private http:HttpClient) {
  }
  getState()
  {
    return this.http.get<Array<State>>(this.baseurl);
  }
}
