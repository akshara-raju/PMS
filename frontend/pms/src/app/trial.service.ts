import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor() { }
  
  noo=0;

  trial2(){


   this.noo=2;
   
   alert('Successsfully logged out.');
   return this.noo;

  }



  trial1(){
   
    
   this.noo=1;
   
   alert(this.noo+'login'); 
   return this.noo;
   }

  




}
