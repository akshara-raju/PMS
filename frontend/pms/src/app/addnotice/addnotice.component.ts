import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';
import { Router } from '@angular/router';
import { NoticeModel } from './notice.model';
@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.css']
})
export class AddnoticeComponent implements OnInit {
  addnotice={
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

title:string = 'Add Notices';
  

  constructor(private noticeService:NoticeService, private router: Router) { }
  ngOnInit(): void {
    
  }
  AddNotice()
  {
    // this.noticeService.newNotice(this.addnotice).subscribe((data)=>{
    //   console.log('data');
      
    // })
    this.noticeService.newNotice(this.addnotice);
    this.router.navigate(['/adminnotice']);
  }

}
