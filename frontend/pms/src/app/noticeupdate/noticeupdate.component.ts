import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-noticeupdate',
  templateUrl: './noticeupdate.component.html',
  styleUrls: ['./noticeupdate.component.css']
})
export class NoticeupdateComponent implements OnInit {
  noticeUpdated={
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

  constructor(private router:Router, private noticeService:NoticeService) { }

  ngOnInit(): void {
    let noticeId= localStorage.getItem("noticeupdateId");
    this.noticeService.getNotice(noticeId).subscribe((data)=>{
      this.noticeUpdated=JSON.parse(JSON.stringify(data));
    })
  }

  updatenotice()
  {
    this.noticeService.updatenotice(this.noticeUpdated);
    alert("Success");
    this.router.navigate(['adminnotice'])

  }

}
