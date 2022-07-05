import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prfacverification',
  templateUrl: './prfacverification.component.html',
  styleUrls: ['./prfacverification.component.css']
})
export class PrfacverificationComponent implements OnInit {
  filtered: any[]=[];


  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  verifyresult(xyz:any){
    for(var stat of xyz){
      this.filtered.push(stat);
    }


  }

}
