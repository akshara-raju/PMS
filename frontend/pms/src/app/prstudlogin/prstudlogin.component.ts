import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prstudlogin',
  templateUrl: './prstudlogin.component.html',
  styleUrls: ['./prstudlogin.component.css']
})
export class PrstudloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  User={ username:'',
  password:''};

   userFunction()
   {
    
    if(this.User.username=='prstudent' && this.User.password=='prstudent'  )
    {

      
      alert("Success!");
    
    }

    else
    {
      alert("Fail!");
    }
      
  }
   


}
