import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../notice.service';
import { FormBuilder } from '@angular/forms';
import { NoticeModel } from '../addnotice/notice.model';

@Component({
  selector: 'app-noticeupdate',
  templateUrl: './noticeupdate.component.html',
  styleUrls: ['./noticeupdate.component.css']
})
export class NoticeupdateComponent implements OnInit {
  noticeUpdated={
    
    company : '',
    title:'',
    disc : '',
    xth : '',
    xiith : '',
    gpa : '',
    qual : '',
    deadline:'',
    ctc : '',
    link : ''

}



  constructor(private router:Router, private fb:FormBuilder, private noticeService:NoticeService, private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);
   
    // this.noticeService.upnot(this.id)
    // .subscribe((data:any)=>{
    //   this.noticeUpdated.patchValue(data);
    // })
    let noticeId= localStorage.getItem("NoticeId");
    console.log(noticeId);
    this.noticeService.getNotice(noticeId).subscribe((data:any)=>{
      this.noticeUpdated=JSON.parse(JSON.stringify(data));
    })

    // this.activatedRoute.params.subscribe((params:any) =>{
    //   this.noticeService.upnot(params.id).subscribe((data:any) =>{
    //     this.noticeService = data
    //     this.noticeUpdated = {
    //       _id:data._id,
    //       company : data.company,
    //       title:data.title,
    //       disc : data.disc,
    //       xth : data.xth,
    //       xiith : data.xiith,
    //       gpa : data.gpa,
    //       qual : data.qual,
    //       deadline:data.deadline,
    //       ctc : data.ctc,
    //       link :data.link

    //     }
    //   })

    // })
    // console.log(this.noticeUpdated);

  }

  // onSubmit()
  // {
  //   // this.noticeService.updatenotice(this.noticeUpdated);
  //   // alert("Success");
  //   // this.router.navigate(['adminnotice'])
  //   console.log(this.noticeUpdated.value);
  //   // this.id = this.url.snapshot.params['id'];

  //   this.noticeService.updtNotice(this.id,this.noticeUpdated.value).subscribe((data:any)=>{
  //     console.log(data);
  //     this.router.navigate(['/adminnotice']);
  //   })

  // }

  // notice:NoticeModel;

 upnotice(){
   this.noticeService.updtNotice(this.noticeUpdated);
   alert("Success");
   this.router.navigate(['/adminnotice'])
 } 

}
