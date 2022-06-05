import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../notice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-noticeupdate',
  templateUrl: './noticeupdate.component.html',
  styleUrls: ['./noticeupdate.component.css']
})
export class NoticeupdateComponent implements OnInit {
//   noticeUpdated={
//     _id:"",
//     company : "",
//     title:"",
//     disc : "",
//     xth : "",
//     xiith : "",
//     gpa : "",
//     qual : "",
//     deadline:"",
//     ctc : "",
//     link : ""

// }
noticeUpdated :any;
  id: any;

  constructor(private router:Router, private fb:FormBuilder, private noticeService:NoticeService, private url: ActivatedRoute) {
    this.noticeUpdated = fb.group(
      {
        
        company:'',
        title:'',
     disc :'',
    xth : '',
    xiith : '',
    gpa :'',
    qual : '',
    deadline:'',
    ctc : '',
    link : ''
      }
    )
   }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    // this.noticeService.updateNotice(this.id)
    // .subscribe(data=>{
    //   this.noticeUpdated.patchValue(data);
    // })
    // let noticeId= localStorage.getItem("noticeupdateId");
    // console.log(noticeId);
    // this.noticeService.getNotice(noticeId).subscribe((data)=>{
    //   this.noticeUpdated=JSON.parse(JSON.stringify(data));
    // })

  }

  onSubmit()
  {
    // this.noticeService.updatenotice(this.noticeUpdated);
    // alert("Success");
    // this.router.navigate(['adminnotice'])
    console.log(this.noticeUpdated.value);
    // this.id = this.url.snapshot.params['id'];

    this.noticeService.updtNotice(this.id,this.noticeUpdated.value).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/adminnotice']);
    })

  }

}
