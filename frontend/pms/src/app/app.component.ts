import { Component } from '@angular/core';
import { TrialService } from './trial.service';//trial


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrialService]//trial
})
export class AppComponent {
  title = 'pms';
  constructor(private triallService: TrialService
    ) {}


  
}
