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
    
    if( (this.reg.uname=="ps1" &&  this.reg.password=="ps1") || (this.reg.uname=="ps2" &&  this.reg.password=="ps2") || (this.reg.uname=="ps3" &&  this.reg.password=="ps3") ){
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