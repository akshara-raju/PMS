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
    
    if( (this.reg.uname=="Admin1" &&  this.reg.password=="Admin1") || (this.reg.uname=="Admin2" &&  this.reg.password=="Admin2") || (this.reg.uname=="Admin3" &&  this.reg.password=="Admin3") ){
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