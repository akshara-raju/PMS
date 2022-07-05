import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DutyserviceService {

   

  constructor(private http:HttpClient) { }
 
  newDuty (xyz:any){
    return this.http.post("http://localhost:3000/addduty",{"data":xyz})
    .subscribe(data =>{console.log(data)})
  }

  getDStatus(){
    return this.http.get("http://localhost:3000/dstatus");
  }


  deleteduty(id:any)
  {
    return this.http.delete("http://localhost:3000/removeduty/"+id)

  }

  verify(xyz:any)
  {
    return this.http.post("http://localhost:3000/verifyleave", {"data":xyz})
    .subscribe(data =>{console.log(data)})

  }

  getApprovedLeaves(){
    return this.http.get("http://localhost:3000/leaves");
  }


  

  
  
}
