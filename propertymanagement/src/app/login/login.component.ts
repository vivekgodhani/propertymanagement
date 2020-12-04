import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { SignupService } from '../service/signup.service';
import { NgForm } from '@angular/forms';
import { User } from '../service/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service:SignupService;
  loa : User
  constructor(private vice: SignupService,private myRoute: Router) 
  {
    this.service=vice;
    this.loa=new User();
    if(localStorage.getItem('l')=="true")
      this.myRoute.navigate([''])

   }

  ngOnInit(): void {
    
  }
  onSubmit(form : NgForm)
  {
    if(form.valid)
     {
       this.service.get(form.value).subscribe((res)=>{
        if(res)
        {
          console.log(res); 
          this.loa =res as User; 
          console.log(this.loa.name+"fdfdfd");
          localStorage.setItem('l', "true");
          localStorage.setItem('n', ""+this.loa.name);
          localStorage.setItem('e', ""+this.loa.email);
          localStorage.setItem('id', ""+this.loa._id);
          this.myRoute.navigate([''])
        }
        else
        alert("please check your credentials");
       })
     }
     else
     alert("please enter valid details");
  }

}
