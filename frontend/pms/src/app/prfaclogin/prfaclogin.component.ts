import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prfaclogin',
  templateUrl: './prfaclogin.component.html',
  styleUrls: ['./prfaclogin.component.css']
})
export class PrfacloginComponent implements OnInit {

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
    
    if( (this.reg.uname=="18/pf/01" &&  this.reg.password=="18/pf/01") || (this.reg.uname=="18/pf/02" &&  this.reg.password=="18/pf/02") || (this.reg.uname=="18/hod/03" &&  this.reg.password=="18/hod/03") ){
    // this.reggService.userReg(this.reg);
    alert("Success!");
    this.router.navigate(['/prfaculty']);
  
  }

  else{
    alert("Invalid Credentials!");
    this.router.navigate(['/prfaclogin']);
  }





  }

}