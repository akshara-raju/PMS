import { Component, OnInit } from '@angular/core';
// import { NoticeModel } from './notice.model';
import { NoticeService } from '../notice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prstudnotice',
  templateUrl: './prstudnotice.component.html',
  styleUrls: ['./prstudnotice.component.css']
})
export class PrstudnoticeComponent implements OnInit {
  notices=[{
    
    company : "",
    title:"",
    disc : "",
    xth : "",
    xiith : "",
    gpa : "",
    qual : "",
    deadline:"",
    ctc : "",
    link : ""

}]


  constructor(private noticeService: NoticeService,private router:Router, public http:HttpClient) { }

  ngOnInit(): void {
    let noticeId = localStorage.getItem('noticeupdateId');
    this.noticeService.getNotices().subscribe((data:any)=>{
      this.notices=JSON.parse(JSON.stringify(data));
    })
  }

  // updatenotice(notice:any){
  //   localStorage.setItem("noticeupdateId", notice._id.toString());
  //   this.router.navigate(['noticeupdate']);
  // }
  // editNotice(Notice:any){
  //   localStorage.setItem("NoticeId", Notice._id.toString());
  //   this.router.navigate(['/noticeupdate']);

 // }
  // deletenotice(notice:any)
  // {
  //   this.noticeService.deletenotice(notice._id)
  //   .subscribe((data) => {
  //     this.notices = this.notices.filter(p => p !== notice);
  //   })
  // }
  

}
