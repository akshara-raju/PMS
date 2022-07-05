import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prstudlogin',
  templateUrl: './prstudlogin.component.html',
  styleUrls: ['./prstudlogin.component.css']
})
export class PrstudloginComponent implements OnInit {

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
    
    if( (this.reg.uname=="18/ps/01" &&  this.reg.password=="18/ps/01") || (this.reg.uname=="18/ps/02" &&  this.reg.password=="18/ps/02") || (this.reg.uname=="18/ps/03" &&  this.reg.password=="18/ps/03") ){
    // this.reggService.userReg(this.reg);
    alert("Success!");
    this.router.navigate(['/prstudent']);
  
  }

  else{
    alert("Invalid Credentials!");
    this.router.navigate(['/prstudlogin']);
  }





  }

}