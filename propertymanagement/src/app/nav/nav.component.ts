import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 Name="";
  constructor(private myRoute: Router) {

   }

  ngOnInit(): void {
    this.Name=""+localStorage.getItem("n");
  }
  islogin()
  {
    if( localStorage.getItem("l")=="true")
    {
      
    this.Name=""+localStorage.getItem("n");
      return true;
    }
    else
      return false;
  
  }
  logout(){
    localStorage.removeItem("l");
    localStorage.removeItem("n");
    localStorage.removeItem("e");
    localStorage.removeItem("id");
    this.myRoute.navigate(["login"]);
  }

}
