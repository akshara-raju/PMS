import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacementStatusService } from '../placement-status.service';
@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit {
  filterstatus ={
    branch:"",
    company:"",
    year:""

  }
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
    ctc:'',
    year:''
  }]
  filtered: any[]=[];

  constructor(private router:Router, private statusService: PlacementStatusService) { }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe((data)=>{
      this.Status=JSON.parse(JSON.stringify(data));

    })
  }
  filterstud(){
    for (var stat of this.Status) {
      if(stat.branch == this.filterstatus.branch && stat.company == this.filterstatus.company && stat.year == this.filterstatus.year){
        
        this.filtered.push(stat);



      }
    }
    console.log(this.filtered)

  }



}
