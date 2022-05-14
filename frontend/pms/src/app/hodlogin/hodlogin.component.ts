import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hodlogin',
  templateUrl: './hodlogin.component.html',
  styleUrls: ['./hodlogin.component.css']
})
export class HodloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  User={ username:'',
  password:''};

   userFunction()
   {
    
    if(this.User.username=='hod' && this.User.password=='hod'  )
    {

      
      alert("Success!");
    
    }

    else
    {
      alert("Fail!");
    }
      
  }
   




  
}

