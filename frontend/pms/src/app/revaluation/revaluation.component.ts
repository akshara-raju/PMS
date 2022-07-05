import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrfacverificationComponent } from '../prfacverification/prfacverification.component';
@Component({
  selector: 'app-revaluation',
  templateUrl: './revaluation.component.html',
  styleUrls: ['./revaluation.component.css']
})
export class RevaluationComponent implements OnInit {
  verDetails={
    AdmissionNumber:'',
    Sem:'',
    course:'',
    grade:'',
    gpa:''

  }

  constructor(private router: Router, private prfac:PrfacverificationComponent) { }

  ngOnInit(): void {
  }
  verifyresult(){
    
    this.prfac.verifyresult(this.verDetails)
    this.router.navigate(['/student']);

  }
}
