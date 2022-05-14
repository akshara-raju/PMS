import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prfaclogin',
  templateUrl: './prfaclogin.component.html',
  styleUrls: ['./prfaclogin.component.css']
})
export class PrfacloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  User={ username:'',
  password:''};

   userFunction()
   {
    
    if(this.User.username=='prfaculty' && this.User.password=='prfaculty'  )
    {

      
      alert("Success!");
    
    }

    else
    {
      alert("Fail!");
    }
      
  }
   


}
