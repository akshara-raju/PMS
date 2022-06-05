import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [UserService]
})
export class SignupComponent implements OnInit {

 
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        alert("Success!")
        
      },
      err => {


        if (err.status === 422) 
        {
          alert("Failed!");
        }

       else
          alert(err);
        
        
      }
    );
  }



}
