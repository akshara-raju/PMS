import { Component, OnInit } from '@angular/core';
// import { NoticeModel } from './notice.model';
import { NoticeService } from '../notice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-admin-notices',
  templateUrl: './admin-notices.component.html',
  styleUrls: ['./admin-notices.component.css']
})
export class AdminNoticesComponent implements OnInit {
  // httpdata;
  notices = [{
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

}
] 

  constructor(private noticeService: NoticeService,private router:Router) { }

  ngOnInit(): void {
    let noticeId = localStorage.getItem('noticeupdateId');
    
    this.noticeService.getNotices().subscribe((data)=>{
      this.notices=JSON.parse(JSON.stringify(data));
    //   this.http.get("http://localhost:3000/noticeupdate")
    // .subscribe((noticeServices)=>{
    //   this.httpdata=noticeServices;
    //   console.log(this.httpdata)})
    })
  }

  updatenotice(notice:any){
    localStorage.setItem("noticeupdateId", notice._id.toString());
    this.router.navigate(['noticeupdate'])
  }
  

}
