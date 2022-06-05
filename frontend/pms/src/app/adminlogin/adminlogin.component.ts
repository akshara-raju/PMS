import { Component, OnInit } from '@angular/core';
import { TrialService } from '../trial.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private util:TrialService){}

    TestHere() {
    //access service function
        this.util.trial1();
    }

  ngOnInit(): void {
  }





  



}
