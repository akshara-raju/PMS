import { Injectable } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

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

  updateNotice(id:any){
    return this.http.get("http://localhost:3000/noticeupdate/"+id,{})
    
  }

  deletenotice(id:any)
  {
    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  updtNotice(id:any,notice:any){
    return this.http.put("http://localhost:3000/noticeupdate/"+id,notice)


  }

  
}


