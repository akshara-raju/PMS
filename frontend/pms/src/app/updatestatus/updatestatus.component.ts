import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacementStatusService } from '../placement-status.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
  searchText: any;

  Status=[{
    studName :'',
    admNo:'',
    phone:'',
    mail:'',
    program:'',
    branch:'',
    company:'',
    title:'',
    ctc:''
  }]

  constructor(private router:Router, private statusService: PlacementStatusService) { }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe((data)=>{
      this.Status=JSON.parse(JSON.stringify(data));
    })
  }

  editStatus(status:any){
    localStorage.setItem("editStudentId", status._id.toString());
    this.router.navigate(['updateplaceddetails']);

  }

}
