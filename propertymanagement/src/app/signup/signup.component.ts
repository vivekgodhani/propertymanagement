
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { SignupService } from '../service/signup.service';

import { CityService } from '../service/city.service';

import {Router} from '@angular/router';
import { CountryService } from '../service/country.service';

import { StateService } from '../service/state.service';
import { City } from '../service/city.model';
import { State} from '../service/state.model';
import { Country } from '../service/country.model';

import { User } from '../service/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  service:SignupService;
  citys:Array<City>;
  country:Array<Country>;
  state:Array<State>
  constructor(private vice: SignupService,private ci: CityService,private c: CountryService,private s: StateService,private myRoute: Router) { 
    this.service=vice;
    this.citys=new Array<City>();
    this.country=new Array<Country>();
    this.state=new Array<State>();
    if(localStorage.getItem('l')=="true")
      this.myRoute.navigate([''])

  }

  ngOnInit() {
    
    this.c.getCountry().subscribe((res)=>{
      if(res)
      {
        this.country=res as Array<Country>
        console.log(this.country);
      }
      else
      {
       alert("Not found")
      }
     })
    this.s.getState().subscribe((res)=>{
      if(res)
      {
        this.state=res as Array<State>
        console.log(this.state);
      }
      else
      {
       alert("Not found")
      }
     })
    this.ci.getCity().subscribe((res)=>{
      if(res)
      {
        
        this.citys=res as Array<City>
      }
      else
      {
       alert("Not found")
      }
     })

  }
  onSubmit(form : NgForm)
  {
    console.log(form.value.dbo);
    if(form.valid)
     {
       if(form.value.password.length>6){
       this.service.insert(form.value).subscribe((res)=>{
        alert("sussecefuly register");
        this.myRoute.navigate(['login'])
       },
       (error)=>
       {
         
        alert("Email is Alrady Used"
        
        
        );
       })
      }
      else{
        alert("Password is to Sort")
      }
     }
     else
     alert("please enter valid details");
  }

}

