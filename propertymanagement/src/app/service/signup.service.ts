import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import {User} from './user.model'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  se:User;
  readonly baseurl='http://localhost:3000/user'
  readonly baseurllogin='http://localhost:3000/user/login'
  readonly baseurlgetbyid='http://localhost:3000/user/?id='

  constructor(private http:HttpClient) {
    this.se=new User(); 

  }
  insert(u:User)
  {
    console.log("inser");
    return this.http.post(this.baseurl,u);
  }
  get(u:User)
  {
    return this.http.post(this.baseurllogin,u);
  }
  update(u:User)
  {
        return this.http.put(this.baseurl + `/${u._id}`, u);      }
  getbyid(s:string)
  {
    return this.http.get(this.baseurlgetbyid,{
      params:{
      id: s
      }
    });
  }
}
