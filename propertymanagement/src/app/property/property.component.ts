import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PropService} from '../service/prop.service'
import { CityService } from '../service/city.service';

import { CountryService } from '../service/country.service';

import { StateService } from '../service/state.service';
import { City } from '../service/city.model';
import { State} from '../service/state.model';
import { Country } from '../service/country.model';

import { NgForm } from '@angular/forms';
import { Prop } from '../service/prop.model';
import{Router} from '@angular/router' 
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  title = 'fileUpload';
  images:any;
  multipleImages = [];
  isu:boolean
  pi:string;
  service:PropService
  citys:Array<City>;
  country:Array<Country>;
  state:Array<State>
  url:any 
  constructor(private http: HttpClient,private vice :PropService,private ci: CityService,private c: CountryService,private s: StateService, private mr:Router  ) { 
    this.isu=false
    this.pi=""
    this.service=vice;
    this.citys=new Array<City>();
    this.country=new Array<Country>();
    this.state=new Array<State>();
  }

  
  ngOnInit(): void {
    
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
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      var red=new FileReader();
      red.readAsDataURL(event.target.files[0])
      red.onload=(event:any)=>{
        this.url=event.target.result;

      }
      this.images = file;
      this.onup();
    }
  }
  onup(){
    const formData = new FormData();
    formData.append('file', this.images,localStorage.getItem("id")+".jpg");

    this.service.files(formData).subscribe(
      (res) =>{ console.log(res)
            this.isu=true;
            this.service.se.path=res.path as string;
      },
      (err) => console.log(err)
    );
  }
  onSubmit(form : NgForm)
  {
    if(form.valid)
     {
       this.service.insert(form.value).subscribe((res)=>{
         alert("sussecefuly Added");
         
       })
       
       this.mr.navigate(['listprop']);
     }
     else
     alert("please enter valid details");
  }


}
