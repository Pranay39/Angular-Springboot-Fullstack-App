// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UserLoginComponent } from '../user-login/user-login.component';


// @Injectable()
// export class AuthService implements CanActivate {

//   constructor( private userLoginComponent : UserLoginComponent ) { }
//   canActivate(): boolean  {
//     throw new Error('Method not implemented.');
//   }


//   isLoggedIn(){
//     // return this.userLoginComponent.isLoggedIn;
//     return false;
//   }
// }


// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// @Injectable()
// export class AuthService {
//   constructor(public jwtHelper: JwtHelperService) {}
//   // ...
//   public isAuthenticated(): boolean {
//     const token = localStorage.getItem('token');
//     // Check whether the token is expired and return
//     // true or false
//     return !this.jwtHelper.isTokenExpired(token);
//   }
// }
