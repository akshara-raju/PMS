import { Component, OnInit } from '@angular/core';
import { TrialService } from '../trial.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

    //inject service into the component
    constructor(private util:TrialService){}

    TestHere() {
    //access service function
        this.util.trial2();
    }

  

  ngOnInit(): void {
  }

}
