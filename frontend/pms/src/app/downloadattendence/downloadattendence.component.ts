import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AttendanceService } from '../attendance.service';

const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';


@Component({
  selector: 'app-downloadattendence',
  templateUrl: './downloadattendence.component.html',
  styleUrls: ['./downloadattendence.component.css']
})
export class DownloadattendenceComponent implements OnInit {


  down={
    datee :''

}


  searchText: any;
  AttStatus=[{
  
  admissionNo:"",
  date:"",
  stime:"",
  etime:"",
  branch:"",
  company:"",
  sem:"",
  section:"",


  }]


  list1: any[]=[];
  
  list2: any[]=[];
  
  list3: any[]=[];
  


  constructor(private router:Router, private AttendanceViewService: AttendanceService) { }

  ngOnInit(): void {
    this.AttendanceViewService.aStatus().subscribe((data)=>{
      this.AttStatus=JSON.parse(JSON.stringify(data));

     //this.newDown()
     console.log(this.AttStatus)

     
    })
  }









  newDown(){


    

    for (var stat of this.AttStatus) {

      if( (this.down.datee==stat.date)){
        // this.reggService.userReg(this.reg);
        this.list1.push(stat.admissionNo);
        this.list2.push(stat.branch);
        this.list3.push(stat.company)
     
        }
    
      }
4      
    
  let docDefinition = {  
    header: 'Attendance list'+ this.down.datee,
    content: this.list1
  };  
 



  pdfMake.createPdf(docDefinition).open();  


}  



}