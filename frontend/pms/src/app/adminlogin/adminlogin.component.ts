import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  reg={
    uname :'',
    password:''

}

title:string = 'register';
  

  constructor( private router: Router) { }
  ngOnInit(): void {
    
  }


  Reg()
  {
    
    if( (this.reg.uname=="18/admin/01" &&  this.reg.password=="18/admin/01") || (this.reg.uname=="18/admin/02" &&  this.reg.password=="18/admin/02") || (this.reg.uname=="18/admin/03" &&  this.reg.password=="18/admin/03") ){
    // this.reggService.userReg(this.reg);
    alert("Success!");
    this.router.navigate(['/admin']);
  
  }

  else{
    alert("Invalid Credentials!");
    this.router.navigate(['/adminlogin']);
  }





  }

}