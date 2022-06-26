import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

import { Reggg } from '../reggg.model';
import { NoticeService } from '../notice.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { FormControl, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-studlogin',
  templateUrl: './studlogin.component.html',
  styleUrls: ['./studlogin.component.css'],
 
})
export class StudloginComponent implements OnInit {


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
    
    if( (this.reg.uname=="stud1" &&  this.reg.password=="stud1") || (this.reg.uname=="stud2" &&  this.reg.password=="stud2") || (this.reg.uname=="stud3" &&  this.reg.password=="stud3") ){
    // this.reggService.userReg(this.reg);
    alert("Success!");
    this.router.navigate(['/student']);
  
  }

  else{
    alert("Invalid Credentials!");
    this.router.navigate(['/studlogin']);
  }





  }

}