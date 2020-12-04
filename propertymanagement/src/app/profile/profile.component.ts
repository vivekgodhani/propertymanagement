import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignupService } from '../service/signup.service';

import { CityService } from '../service/city.service';

import { CountryService } from '../service/country.service';

import { StateService } from '../service/state.service';
import { City } from '../service/city.model';
import { State} from '../service/state.model';
import { Country } from '../service/country.model';

import { User } from '../service/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
isupdate:boolean;
user:User;



  service:SignupService;
  citys:Array<City>;
  country:Array<Country>;
  state:Array<State>
  constructor(private vice: SignupService,private ci: CityService,private c: CountryService,private s: StateService) { 
    this.service=vice;
    this.citys=new Array<City>();
    this.country=new Array<Country>();
    this.state=new Array<State>();
    this.user=new User();
    this.isupdate=false;
    
  }

  ngOnInit() {
    
    
    this.isupdate=false;
    this.service.getbyid(localStorage.getItem("e") as string).subscribe((res)=>{
      if(res)
      {
        this.user=res as User
        this.service.se=this.user
        console.log(this.user);
      }
      else
      alert("Some errer is there");
     })
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
  
  doupdate()
  {
    this.isupdate=!this.isupdate;
  }
  onSubmit(form : NgForm)
  {
    console.log(form.value.dbo);
    if(form.valid)
     {
       this.service.update(form.value).subscribe((res)=>{
         this.ngOnInit();
       })
     }
     else
     alert("please enter valid details");
  }

}
