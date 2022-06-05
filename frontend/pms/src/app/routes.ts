import { Routes } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './user/sign-up.component'; 
import { SignupComponent } from './signup/signup.component';



export const appRoutes: Routes = [
    {
        path: 'signup', component: SignupComponent 
    }
    // {
    //     path: 'login', component: UserComponent,
    //     children: [{ path: '', component: SignInComponent }]
    // },
    // {
    //     path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    // },
    // {
    //     path: '', redirectTo: '/signup', pathMatch: 'full'
    // }
];
