import { Injectable } from '@angular/core';

import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private myRoute: Router) { }
  isLoggedIn():boolean {
    if( localStorage.getItem("l")=="true")
        return true;
    else
    {
      return false;
    }
  }
}
