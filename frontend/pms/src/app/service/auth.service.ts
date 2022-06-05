import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiurl = 'https://localhost:4200/studlogin';


  constructor(private http:HttpClient) {

   }
  
}



// import { Injectable } from "@angular/core";
// import {
// 	ActivatedRouteSnapshot,
// 	CanActivate,
// 	Router,
// 	RouterStateSnapshot,
// 	UrlTree
// } from "@angular/router";
// import { AuthService } from "./auth.service";

// @Injectable()
// export class AuthGuard implements CanActivate {
// 	constructor(
// 		private authService: AuthService,
// 		private router: Router) { }
// 	canActivate(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot): boolean | Promise<boolean> {
// 		var isAuthenticated = this.authService.getAuthStatus();
// 		if (!isAuthenticated) {
// 			this.router.navigate(['/login']);
// 		}
// 		return isAuthenticated;
// 	}
// }
