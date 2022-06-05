import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacementStatusService {

  constructor(private http:HttpClient) { }

  getStatus(){
    return this.http.get("http://localhost:3000/status");
  }

  editStatus(Status:any){
    return this.http.put("http://localhost:3000/updateplaceddetails", Status)
    .subscribe(data =>{console.log(data)})
  }

  getStatuses(id:any){
    return this.http.get("http://localhost:3000/"+id)
  }
}
