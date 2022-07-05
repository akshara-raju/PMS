import { Component, OnInit } from '@angular/core';
import { DutyserviceService } from '../dutyservice.service';

import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewduty',
  templateUrl: './viewduty.component.html',
  styleUrls: ['./viewduty.component.css']
})
export class ViewdutyComponent implements OnInit {
  DStatus=[{
    admissionNo : "",
    date:"",
    stime : "",
    etime : "",
    company : "",
    branch : "",
    section : "",
    sem:""

}
]

  constructor(private router:Router, private dutyserviceService: DutyserviceService) { }

  ngOnInit(): void {
    this.dutyserviceService.getDStatus().subscribe((data)=>{
      this.DStatus=JSON.parse(JSON.stringify(data));
    })
  }

  deleteduty(status:any)
  {
    this.dutyserviceService.deleteduty(status._id)
    .subscribe((data) => {
      this.DStatus = this.DStatus.filter(p => p !== status);
    })
  }

  verify(status:any)
  {
    this.dutyserviceService.verify(status);
    this.deleteduty(status);
    this.router.navigate(['/viewduty']);

  }

}