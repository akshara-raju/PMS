import { Component, OnInit } from '@angular/core';
import { DutyserviceService } from '../dutyservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewdutyapprove',
  templateUrl: './viewdutyapprove.component.html',
  styleUrls: ['./viewdutyapprove.component.css']
})
export class ViewdutyapproveComponent implements OnInit {
  Approved = {
    branch:'',
    date:''
  }
verified =[{
  admissionNo:'',
  date:'',
  stime:'',
  etime:'',
  company:'',
  branch:'',
  section:'',
  sem:''
}]

filtered: any[]=[];

  constructor(private router: Router, private dutyservice:DutyserviceService) { }

  ngOnInit(): void {
    this.dutyservice.getApprovedLeaves().subscribe((data)=>{
      this.verified=JSON.parse(JSON.stringify(data));

    })
  }
  display(){
    for(var leave of this.verified){
      if(leave.date==this.Approved.date && leave.branch==this.Approved.branch){
       
        


        
        this.filtered.push(leave);
      }
    
    }
    

  }
}
