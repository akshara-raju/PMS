// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
  
//   xyz="asdfghjk";
//   constructor() { 

     
    

//   }

//   ngOnInit(): void {
//   }

  

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  xyz="asdfghjk";
  constructor(private router: Router) {

    
    
  }


  ngOnInit(): void {
  }

  

}
