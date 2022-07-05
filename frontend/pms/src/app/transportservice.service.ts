import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportserviceService {

  constructor(private http:HttpClient) { }
  

  newTrans (xyz:any){
    return this.http.post("http://localhost:3000/addtrans",{"data":xyz})
    .subscribe(data =>{console.log(data)})
  }


  getTStatus(){
    return this.http.get("http://localhost:3000/tstatus");
  }

  // getReg(){
  //   return this.http.get("http://localhost:3000/reg");
  // }



  // updtNotice(id:any,notice:any){
  //   return this.http.put("http://localhost:3000/noticeupdate/"+id,notice)


  // }

  
}