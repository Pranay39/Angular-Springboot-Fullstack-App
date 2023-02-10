import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserLoginComponent } from './user-login/user-login.component';
// import { AuthGuard } from './shared/auth.guard';
// import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { Child1Component } from './child1/child1.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
// import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';



const routes: Routes = [
  {path : 'auth', component : SignInComponent},
  {path : 'login', component : SignInComponent},
 
    // children : [
    //   {path : 'employees', 
    //   component : EmployeeListComponent, pathMatch : 'full'
    //   },
    // ]
    
 
  {path : 'employees', component : EmployeeListComponent, canActivate : [AuthGuardService],},
  {path : 'create-employee', component : CreateEmployeeComponent, canActivate : [AuthGuardService]},
  {path : 'update-employee/:id', component : UpdateEmployeeComponent, },
  {
    path : 'employee-details/:id',
   component : EmployeeDetailsComponent,
   children : [{path : 'addtional-info',  component : Child1Component}]
  },

  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'sign-up', component : SignUpComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
 }

