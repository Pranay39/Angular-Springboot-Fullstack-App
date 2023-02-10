import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { UserLoginComponent } from 'src/app/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  employee : Employee = new Employee();
  public static isLoggedIn: boolean = false;

  constructor(private employeeService : EmployeeService,
    private router : Router) { }

  // public isLoggedIn :boolean = true;
  ngOnInit(): void {
    // this.isLoggedIn = true;
  }

  
  
  loginUser(){
    console.log(this.employee);
    this.employeeService.loginUser(this.employee).subscribe(data => {
      UserLoginComponent.isLoggedIn = true;
      alert("Login Successful")
      this.goToEmployeeList();
    }, error=> alert("Invalid Credentails"));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

}

