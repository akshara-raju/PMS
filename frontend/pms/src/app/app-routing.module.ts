import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { PrStudenthomeComponent } from './pr-studenthome/pr-studenthome.component';
import { PrFacultyhomeComponent } from './pr-facultyhome/pr-facultyhome.component';
import { HodhomeComponent } from './hodhome/hodhome.component';
import { ViewappliedComponent } from './viewapplied/viewapplied.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { AddnoticeComponent } from './addnotice/addnotice.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { AdminNoticesComponent } from './admin-notices/admin-notices.component';
import { NoticeupdateComponent } from './noticeupdate/noticeupdate.component';
import { MarkattendanceComponent } from './markattendance/markattendance.component';
import { DownloadattendenceComponent } from './downloadattendence/downloadattendence.component';
import { StudupdateComponent } from './studupdate/studupdate.component';
import { StuddrivenoticesComponent } from './studdrivenotices/studdrivenotices.component';
import { TransportationComponent } from './transportation/transportation.component';
import { PrstudnoticeComponent } from './prstudnotice/prstudnotice.component';
import { CommonloginComponent } from './commonlogin/commonlogin.component';
import { StudloginComponent } from './studlogin/studlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PrfacloginComponent } from './prfaclogin/prfaclogin.component';
import { PrstudloginComponent } from './prstudlogin/prstudlogin.component';
import { DutyleaveComponent } from './dutyleave/dutyleave.component';
import { HodloginComponent } from './hodlogin/hodlogin.component';
import { PrfacverificationComponent } from './prfacverification/prfacverification.component';
import { RevaluationComponent } from './revaluation/revaluation.component';
import { OfferletterComponent } from './offerletter/offerletter.component';
import { UpdatePlacedDetailsComponent } from './update-placed-details/update-placed-details.component';
import {SignupComponent} from './signup/signup.component';

import { AuthGuard } from './service/auth.guard';


const routes: Routes = [{path:'', component:HomeComponent},


{path:'login', component:LoginComponent,
canActivate: [AuthGuard]
},
{path:'admin',component:AdminhomeComponent,
canActivate: [AuthGuard]
},
{path:'student', component:StudenthomeComponent,
canActivate: [AuthGuard]
},
{path:'prstudent', component:PrStudenthomeComponent,
canActivate: [AuthGuard]
},
{path:'prfaculty',component:PrFacultyhomeComponent,
canActivate: [AuthGuard]
},
{path:'hod', component:HodhomeComponent,
canActivate: [AuthGuard]


},





{path:'viewstatus', component:ViewstatusComponent},
{path:'viewapplied', component:ViewappliedComponent},
{path:'addnotice',component:AddnoticeComponent},
{path:'updatestatus', component:UpdatestatusComponent},
{path:'adminnotice',component:AdminNoticesComponent},
{path:'noticeupdate', component:NoticeupdateComponent},
{path:'markattendance', component:MarkattendanceComponent},
{path:'downloadattendance', component:DownloadattendenceComponent},
{path:'studupdate', component:StudupdateComponent},
{path:'transportation', component:TransportationComponent},
{path:'studdrivenotices', component:StuddrivenoticesComponent},
{path:'prstudnotice', component:PrstudnoticeComponent},
{path: 'prfacverification' , component:PrfacverificationComponent},
{path: 'commonlogin', component:CommonloginComponent},
{path: 'dutyleave', component:DutyleaveComponent},
{path: 'offerletter', component:OfferletterComponent},
{path: 'revaluation',component:RevaluationComponent},
{path: 'noticeupdate/:id', component:NoticeupdateComponent},
{path: 'updateplaceddetails', component:UpdatePlacedDetailsComponent},




{path: 'adminlogin', component:AdminloginComponent},
{path: 'prfaclogin', component:PrfacloginComponent},
{path: 'prstudlogin', component:PrstudloginComponent},
{path: 'hodlogin', component:HodloginComponent},
{path: 'studlogin', component:StudloginComponent},


{path: 'register', component:SignupComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
