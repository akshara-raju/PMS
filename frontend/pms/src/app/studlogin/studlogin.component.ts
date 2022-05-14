import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studlogin',
  templateUrl: './studlogin.component.html',
  styleUrls: ['./studlogin.component.css']
})
export class StudloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  User={ username:'',
  password:''};

   userFunction()
   {
    
    if(this.User.username=='student' && this.User.password=='student'  )
    {

      
      alert("Success!");
    
    }

    else
    {
      alert("Fail!");
    }
      
  }
   




  



}
