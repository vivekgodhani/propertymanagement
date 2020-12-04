import { Injectable } from '@angular/core';
import{ Prop } from './prop.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PropService {

  se:Prop
  readonly baseurl='http://localhost:3000/prop'
  constructor(private http: HttpClient) { 
    this.se=new Prop();
  }
  insert(u:Prop)
  {
    console.log(u);
    return this.http.post(this.baseurl,u);
  }
  files(formData:FormData)
  {
    return this.http.post<any>('http://localhost:3000/prop/file', formData)
  }
  get()
  {
    return this.http.get<Array<Prop>>(this.baseurl);
  }
}
