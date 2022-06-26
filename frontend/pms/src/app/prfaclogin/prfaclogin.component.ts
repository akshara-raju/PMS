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
    
    if( (this.reg.uname=="pf1" &&  this.reg.password=="pf1") || (this.reg.uname=="pf2" &&  this.reg.password=="pf2") || (this.reg.uname=="pf3" &&  this.reg.password=="pf3") ){
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