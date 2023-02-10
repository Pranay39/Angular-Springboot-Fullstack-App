import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginComponent } from '../user-login/user-login.component';
import { NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(){
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
  //   // return this.isLogged();
  //   // throw new Error('Method not implemented.');
  // //  return this.userLoginComponent.isLoggedIn;
  // return false;
  return UserLoginComponent.isLoggedIn;
  }
}


// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';
// // import { AuthService } from './auth.service';
// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(): boolean {
//     if (!this.auth.isAuthenticated()) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }