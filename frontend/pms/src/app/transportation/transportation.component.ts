import { Component, OnInit } from '@angular/core';

import {TransportserviceService} from '../transportservice.service';
import { Router } from '@angular/router';

import { TransModel } from './transport.model';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  addtrans={
    
    admissionNo : "",
    date : "",
    company : "",
    branch : "",
    section: "",
    bp : "",
    sem : ""

}

title:string = 'Add Notices';
  

  constructor(private transportService:TransportserviceService, private router: Router) { }
  ngOnInit(): void {
    
  }
  AddTrans()
  {
    // this.noticeService.newNotice(this.addnotice).subscribe((data)=>{
    //   console.log('data');
      
    // })



    




    this.transportService.newTrans(this.addtrans);
    //this.transportService.sendMail();
    alert("Success!")
    this.router.navigate(['/student']);
   
  }

}