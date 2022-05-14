import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddnoticeComponent } from './addnotice/addnotice.component';
import { AdminNoticesComponent } from './admin-notices/admin-notices.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HodhomeComponent } from './hodhome/hodhome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoticeupdateComponent } from './noticeupdate/noticeupdate.component';
import { ViewappliedComponent } from './viewapplied/viewapplied.component';
import { PrFacultyhomeComponent } from './pr-facultyhome/pr-facultyhome.component';
import { PrStudenthomeComponent } from './pr-studenthome/pr-studenthome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { MarkattendanceComponent } from './markattendance/markattendance.component';
import { DownloadattendenceComponent } from './downloadattendence/downloadattendence.component';
import { PrstudnoticeComponent } from './prstudnotice/prstudnotice.component';
import { StuddrivenoticesComponent } from './studdrivenotices/studdrivenotices.component';
import { PrfacverificationComponent } from './prfacverification/prfacverification.component';
import { StudupdateComponent } from './studupdate/studupdate.component';
import { TransportationComponent } from './transportation/transportation.component';
import { StudloginComponent } from './studlogin/studlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PrstudloginComponent } from './prstudlogin/prstudlogin.component';
import { PrfacloginComponent } from './prfaclogin/prfaclogin.component';
import { HodloginComponent } from './hodlogin/hodlogin.component';
import { CommonloginComponent } from './commonlogin/commonlogin.component';
import { DutyleaveComponent } from './dutyleave/dutyleave.component';
import { OfferletterComponent } from './offerletter/offerletter.component';
import { RevaluationComponent } from './revaluation/revaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddnoticeComponent,
    AdminNoticesComponent,
    AdminhomeComponent,
    HodhomeComponent,
    HomeComponent,
    LoginComponent,
    NoticeupdateComponent,
    ViewappliedComponent,
    PrFacultyhomeComponent,
    PrStudenthomeComponent,
    StudenthomeComponent,
    UpdatestatusComponent,
    ViewstatusComponent,
    MarkattendanceComponent,
    DownloadattendenceComponent,
    PrstudnoticeComponent,
    StuddrivenoticesComponent,
    PrfacverificationComponent,
    StudupdateComponent,
    TransportationComponent,
    StudloginComponent,
    AdminloginComponent,
    PrstudloginComponent,
    PrfacloginComponent,
    HodloginComponent,
    CommonloginComponent,
    DutyleaveComponent,
    OfferletterComponent,
    RevaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
