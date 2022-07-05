import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TransportserviceService} from '../transportservice.service';

@Component({
  selector: 'app-viewtransport',
  templateUrl: './viewtransport.component.html',
  styleUrls: ['./viewtransport.component.css']
})
export class ViewtransportComponent implements OnInit {
  transport ={
    branch:'',
    date:''
  }
  TStatus=[{
    admissionNo : "",
    date:"",
    company : "",
    branch : "",
    section : "",
    bp : "",
    sem:""

}
]
filtered: any[]=[];

  constructor(private router:Router, private transportserviceService: TransportserviceService) { }

  ngOnInit(): void {
    this.transportserviceService.getTStatus().subscribe((data)=>{
      this.TStatus=JSON.parse(JSON.stringify(data));
    })
  }

  display(){
    for(var trans of this.TStatus){
      if(trans.date==this.transport.date && trans.branch==this.transport.branch){
       
        


        
        this.filtered.push(trans);
      }
    
    }

  }

}