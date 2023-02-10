import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
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
