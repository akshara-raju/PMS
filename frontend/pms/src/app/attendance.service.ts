import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  markatt(xyz:any){
    return this.http.post("http://localhost:3000/markatt",{"data":xyz})
    .subscribe(data =>{console.log(data)})
  }


  aStatus(){
    return this.http.get("http://localhost:3000/getatt");
  }

}
