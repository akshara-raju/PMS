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
    
    if( (this.reg.uname=="18/hod/01" &&  this.reg.password=="18/hod/01") || (this.reg.uname=="18/hod/02" &&  this.reg.password=="18/hod/02") || (this.reg.uname=="18/hod/03" &&  this.reg.password=="18/hod/03") ){
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