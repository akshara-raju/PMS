import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DutyserviceService } from '../dutyservice.service';
import { DutyModel } from './duty.model';



@Component({
  selector: 'app-dutyleave',
  templateUrl: './dutyleave.component.html',
  styleUrls: ['./dutyleave.component.css']
})
export class DutyleaveComponent implements OnInit {
  addduty={
    admissionNo : "",
    date:"",
    stime : "",
    etime : "",
    company : "",
    branch : "",
    section : "",
    sem:""

}

title:string = 'Add Duty Leave';
  

  constructor(private dutyservice: DutyserviceService , private router: Router) { }
  ngOnInit(): void {
    
  }
  AddDuty()
  {
    // this.noticeService.newNotice(this.addnotice).subscribe((data)=>{
    //   console.log('data');
      
    // })



    




    this.dutyservice.newDuty(this.addduty);
    alert("Success!")
    this.router.navigate(['/student']);
  }

}