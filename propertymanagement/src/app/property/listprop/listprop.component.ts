import { Component, OnInit } from '@angular/core';
import { Prop } from 'src/app/service/prop.model';
import {PropService} from '../../service/prop.service'

@Component({
  selector: 'app-listprop',
  templateUrl: './listprop.component.html',
  styleUrls: ['./listprop.component.css']
})
export class ListpropComponent implements OnInit {

  ll:Array<Prop>
  constructor(private vice :PropService) {
    this.ll=new Array<Prop>();
   }

  ngOnInit(): void {
    this.vice.get().subscribe((res)=>{
      if(res)
      {
        this.ll=res as Array<Prop>;
      }
      else
      {
       alert("Not found")
      }
     })
  }

}
