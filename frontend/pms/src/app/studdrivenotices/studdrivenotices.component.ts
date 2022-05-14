import { Component, OnInit } from '@angular/core';
import { NoticeModel } from '../addnotice/notice.model';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-studdrivenotices',
  templateUrl: './studdrivenotices.component.html',
  styleUrls: ['./studdrivenotices.component.css']
})
export class StuddrivenoticesComponent implements OnInit {
  notices: NoticeModel[] = [];

  constructor(private noticeService:NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices().subscribe((data)=>{
      this.notices=JSON.parse(JSON.stringify(data));
    })
  }

}
