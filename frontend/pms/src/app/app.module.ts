import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



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
import { UpdatePlacedDetailsComponent } from './update-placed-details/update-placed-details.component';
import { SignupComponent } from './signup/signup.component';



//routes
import { appRoutes } from './routes';



import { TrialService } from './trial.service';
import { HlComponent } from './hl/hl.component';

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
    RevaluationComponent,
    UpdatePlacedDetailsComponent,
    SignupComponent,
    HlComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    // Router
    // NgMultiSelectDropDownModule.forRoot()
   
    
  ],

  providers: [TrialService], //FOR GLOBAL SERVICE
  
  
  bootstrap: [AppComponent]


})

export class AppModule { }
