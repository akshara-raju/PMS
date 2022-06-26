import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-hodlogin',
  templateUrl: './hodlogin.component.html',
  styleUrls: ['./hodlogin.component.css']
})
export class HodloginComponent implements OnInit {

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
    
    if( (this.reg.uname=="hod1" &&  this.reg.password=="hod1") || (this.reg.uname=="hod2" &&  this.reg.password=="hod2") || (this.reg.uname=="hod3" &&  this.reg.password=="hod3") ){
    // this.reggService.userReg(this.reg);
    alert("Success!");
    // myGlobals.noo=1;

    this.router.navigate(['/hod']);
  
  }

  else{
    alert("Invalid Credentials!");
    this.router.navigate(['/hodlogin']);
  }





  }

}