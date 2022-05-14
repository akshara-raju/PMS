import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  

  constructor(private http:HttpClient) { }
  getNotice(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getNotices(){
    return this.http.get("http://localhost:3000/notices");
  }

  newNotice (xyz:any){
    return this.http.post("http://localhost:3000/addnotice",{"data":xyz})
    .subscribe(data =>{console.log(data)})
  }

  updatenotice(notice:any){
    return this.http.put("http://localhost:3000/updatenotice",notice)
    .subscribe(data =>{console.log(data)})
  }

  
}


