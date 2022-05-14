import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() { }

  

 
  ngOnInit(): void {

    // userFunction(
    //   alert("Success")
    // )
  
  }

 
  User={ username:'',
  password:''};

   userFunction()
   {
    
    if(this.User.username=='admin' && this.User.password=='admin'  )
    {

      
      alert("Success!");
    
    }

    else
    {
      alert("Fail!");
    }
      
  }
   




  

}
