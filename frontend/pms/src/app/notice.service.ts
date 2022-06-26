import { Injectable } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
// import { openStdin } from 'process';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  

  constructor(private http:HttpClient) { }
  getNotice(id:any){
    return this.http.get("http://localhost:3000/not/"+id);
  }
  getNotices(){
    return this.http.get("http://localhost:3000/notices");
  }

  newNotice (xyz:any){
    return this.http.post("http://localhost:3000/addnotice",{"data":xyz})
    .subscribe(data =>{console.log(data)})
  }


  sendMail(){
    return this.http.get("http://localhost:3000/maill");
  }



  // updateNotice(xyz:any){
  //   return this.http.put("http://localhost:3000/upnotice", {"data":xyz})

  // }

 

  updtNotice(notice:any){
    return this.http.put("http://localhost:3000/noticeupdate",notice)
    .subscribe(data =>{console.log(data)})


  }

  deletenotice(id:any)
  {
    return this.http.delete("http://localhost:3000/remove/"+id)

  }



  // getReg(){
  //   return this.http.get("http://localhost:3000/reg");
  // }



  // updtNotice(id:any,notice:any){
  //   return this.http.put("http://localhost:3000/noticeupdate/"+id,notice)


  // }

  
}


