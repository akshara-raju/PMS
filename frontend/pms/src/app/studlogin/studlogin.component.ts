import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-studlogin',
  templateUrl: './studlogin.component.html',
  styleUrls: ['./studlogin.component.css'],
 
})
export class StudloginComponent implements OnInit {






  // messageclass = ''
  // message = ''
  // Customerid: any;
  // editdata: any;
  // responsedata: any;

  constructor(private service:AuthService, private  route:Router) {






  }



  // Login = new FormGroup({
  //   username: new FormControl("", Validators.required),
  //   password: new FormControl("", Validators.required)
  // });



  ngOnInit(): void {
  }
 
   
  ProceedLogin(){}

  // ProceedLogin()
  //  {
    
  //   if (this.Login.valid) {

  //     this.service.ProceedLogin(this.Login.value).subscribe(result => {
  //       if(result!=null){
  //         this.responsedata=result;
  //         localStorage.setItem('token',this.responsedata.jwtToken)
  //         this.route.navigate([''])
  //       }

  //     });


  //   }
      
  // }
   
  studlogin()
  {
    // this.noticeService.newNotice(this.addnotice).subscribe((data)=>{
    //   console.log('data');
      
    // })


  //   if(this.username==){
  //   this.route.navigate(['/studenthome']);}
  }




  



}
