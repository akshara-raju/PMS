import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-markattendance',
  templateUrl: './markattendance.component.html',
  styleUrls: ['./markattendance.component.css']
})
export class MarkattendanceComponent implements OnInit {
  markattendance={
  AdmissionNumber:'',
  date:"",
  Starttime:"",
  Endtime:"",
  branch:"",
  company:"",
  sem:"",
  section:"",
}
  constructor(private attService:AttendanceService, private router:Router) { }

  ngOnInit(): void {
  }

  attendance(){
    this.attService.markatt(this.markattendance)
    alert("Success!")
    this.router.navigate(['/prstudent'])

  }

}
