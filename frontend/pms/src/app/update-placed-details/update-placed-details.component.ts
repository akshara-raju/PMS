import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { PlacementStatusService } from '../placement-status.service';
@Component({
  selector: 'app-update-placed-details',
  templateUrl: './update-placed-details.component.html',
  styleUrls: ['./update-placed-details.component.css']
})
export class UpdatePlacedDetailsComponent implements OnInit {
  statusDetails={
    studName :'',
    admNo:'',
    phone:'',
    mail:'',
    program:'',
    branch:'',
    company:'',
    title:'',
    ctc:''
  }

  constructor(private router:Router, private statusService:PlacementStatusService) { }

  ngOnInit(): void {
    let statusId = localStorage.getItem("editStudentId");
    this.statusService.getStatuses(statusId).subscribe((data)=> {
      this.statusDetails = JSON.parse(JSON.stringify(data));
    })
  }

  editStatus(){
    this.statusService.editStatus(this.statusDetails);
    alert("Success");
    this.router.navigate(['updatestatus'])

  }

}
